<?php

namespace CMS\PageBundle\Page;

use CMS\PageBundle\Block\BlockManager;
use CMS\SharedBundle\Entity\Page;
use CMS\SharedBundle\Entity\PageRevision;
use Doctrine\ORM\EntityManager;
use Symfony\Bridge\Monolog\Logger;


/**
 * PageManager is used to find, load and modify pages.
 *
 * @author jtemplet
 */
class PageManager {
    
    protected $em;
    protected $blockManager;
    protected $engine;
    protected $container; 
    
    protected $page;    
    
    protected $generatedContent;

    public function __construct(EntityManager $em, BlockManager $blockManager, $container, Logger $logger) {
        $this->em = $em;
        $this->container = $container;
        $this->engine = $this->container->get('templating');
        $this->blockManager = $blockManager;
        $this->page = FALSE;
        $this->generatedContent = FALSE;
        $this->logger = $logger;
    }

    public function loadBySlug($pageSlug) {
        // remove a trailing slash from slug if there is one. otherwise shit goes wrong. (it wont find the page)
        $pageSlug = preg_replace('{/$}', '', $pageSlug);
        $this->page = $this->em->getRepository('CMSSharedBundle:Page')->findOneBySlug($pageSlug);
        if ($this->page) {         
            $this->currentRevision = $this->page->getCurrentRevision();
            if($this->currentRevision){
                $this->blockManager->setPageManager($this); // set the page manager context for the BlockManager
                return TRUE;
            }                        
        }
        return FALSE;
    }
    
    public function loadById($pageId) {
        $this->page = $this->em->getRepository('CMSSharedBundle:Page')->findOneById($pageId);
        if ($this->page) {         
            $this->currentRevision = $this->page->getCurrentRevision();
            if($this->currentRevision){
                $this->blockManager->setPageManager($this); // set the page manager context for the BlockManager
                return TRUE;
            }                        
        }
        return FALSE;
    }
    
    public function isLoaded(){
        if($this->page){
            return TRUE;
        }
        return FALSE;
    }
           
    /**
     * Is the rendered version of this page currently cached?
     * 
     * @return boolean Whether the rendered page exists in the cache
     */
    public function isCached(){
        
        return FALSE;
    }
    
    /**
     * Can the current user edit this page?
     * 
     * @return boolean
     */
    public function isEditable(){
        $this->securityContext = $this->container->get('security.context');
        if($this->securityContext->isGranted('EDIT', $this->page) ){
            return TRUE;
        }
        return FALSE;
    }
    
    /**
     * Render the page to HTML
     * @return boolean Returns TRUE on success, or FALSE on failure.
     */
    public function render(){
        if($this->isLoaded()){
            // check cached page.
            $this->logger->info("PageManager:render() - rendering page {$this->page->getName()}");
            
            // grab the root block and throw it to the mercy of the blockManager!            
            if($this->page->getCurrentRevision()){                
                $this->logger->debug("PageManager:render() - getting current revision");
                $this->blockManager->load($this->currentRevision->getRootBlock());            
                
                if($this->blockManager->generate()){
                    $this->logger->debug("PageManager:render() - getGeneratedContent for {$this->blockManager->getBlock()->getName()}");
                    $this->generatedContent .= $this->blockManager->getGeneratedContent();
                }
                
                if($this->generatedContent){
                    
                    return TRUE;
                }
            }                        
            
            
        }
        return FALSE;        
    }       
    
    public function getPage(){
        if($this->isLoaded()){
            return $this->page;
        }
        
        return FALSE;
    }
    
    public function setPage(Page $page){
        $this->page = $page;
        return $this;
    }
    
    public function getRootBlock(){
        if($this->isLoaded()){
            return $this->currentRevision->getRootBlock();
        }
        
        return FALSE;
    }
    
    public function getContent(){        
        return $this->generatedContent;
    }       
    
    public function createPage($pageValues){        
        $this->page = new Page();
        if(array_key_exists('name', $pageValues)){
            $this->page->setName($pageValues['name']);
        }
        
        if(array_key_exists('slug', $pageValues)){
            $this->page->setSlug($pageValues['slug']);
        }
        
        $this->createInitialPageRevision($this->page);
        
        $this->em->persist($this->page);
        $this->em->flush();
        return $this;
    }
    
    public function createInitialPageRevision($page){        
        //$currentUser = $this->container->get('security.context')->getToken()->getUser();        
        $pageRevision = new PageRevision();        
        $pageRevision->setRevision('1');        
        $pageRevision->setRootBlock($this->blockManager->createRootBlock($page->getName()));
        $pageRevision->setPublishApproved(FALSE);
        //$pageRevision->setEditor($currentUser);
        $this->em->persist($pageRevision);
        $page->setCurrentRevision($pageRevision);
                
        return $pageRevision;
        
    }
}
