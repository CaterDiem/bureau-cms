<?php

namespace CMS\PageBundle\Page;

use CMS\PageBundle\Container\ContainerManager;
use Doctrine\ORM\EntityManager;
use Symfony\Component\Templating\EngineInterface;

/**
 * PageManager is used to find, load and modify pages.
 *
 * @author jtemplet
 */
class PageManager {
    
    protected $em;
    protected $containerManager;
    protected $engine;
    
    protected $page;    
    
    protected $generatedContent;

    public function __construct(EntityManager $em, ContainerManager $containerManager, EngineInterface $templating) {
        $this->em = $em;
        $this->engine = $templating;
        $this->containerManager = $containerManager;
        $this->page = FALSE;
        $this->generatedContent = FALSE;
    }

    public function loadBySlug($pageSlug) {
        $this->page = $this->em->getRepository('CMSSharedBundle:Page')->findOneBySlug($pageSlug);
        if ($this->page) {         
            $this->currentRevision = $this->page->getCurrentRevision();
            if($this->currentRevision){
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
     * Render the page to HTML
     * @return boolean Returns TRUE on success, or FALSE on failure.
     */
    public function render(){
        if($this->isLoaded()){
            // check cached page.
                        
            // grab the root container and throw it to the mercy of the containerManager!            
            if($this->page->getCurrentRevision()){                
                
                $this->containerManager->loadContainerTree($this->currentRevision->getRootContainer());            
                
                $this->generatedContent = $this->containerManager->generate();                
                
                if($this->generatedContent){
                
                    return TRUE;
                }
            }                        
            
            
        }
        return FALSE;        
    }       
    
    public function getContent(){
        return $this->generatedContent;
    }       
}
