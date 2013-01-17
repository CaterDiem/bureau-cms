<?php

namespace CMS\PageBundle\Page;

use CMS\PageBundle\Block\BlockManager;
use Doctrine\ORM\EntityManager;
use Symfony\Component\Templating\EngineInterface;

/**
 * PageManager is used to find, load and modify pages.
 *
 * @author jtemplet
 */
class PageManager {
    
    protected $em;
    protected $blockManager;
    protected $engine;
    
    protected $page;    
    
    protected $generatedContent;

    public function __construct(EntityManager $em, BlockManager $blockManager, EngineInterface $templating) {
        $this->em = $em;
        $this->engine = $templating;
        $this->blockManager = $blockManager;
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
                        
            // grab the root block and throw it to the mercy of the blockManager!            
            if($this->page->getCurrentRevision()){                
                
                $this->blockManager->load($this->currentRevision->getRootBlock());            
                
                $this->generatedContent = $this->blockManager->generate();                
                
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
