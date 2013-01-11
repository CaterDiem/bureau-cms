<?php

namespace CMS\PageBundle\Page;

use Doctrine\ORM\EntityManager;

use CMS\SharedBundle\Entity\Page;
use CMS\SharedBundle\Entity\Container;

use CMS\PageBundle\Container\ContainerManager;

/**
 * PageManager is used to find, load and modify pages.
 *
 * @author jtemplet
 */
class PageManager {
    
    protected $em;
    protected $containerManager;
    public $page;

    public function __construct(EntityManager $em, ContainerManager $containerManager) {
        $this->em = $em;
        $this->containerManager = $containerManager;
        $this->page = FALSE;
    }

    public function loadBySlug($pageSlug) {
        $this->page = $this->em->getRepository('CMSSharedBundle:Page')->findOneBySlug($pageSlug);
        if ($this->page) {         
            return TRUE;
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
     * @return mixed Returns the HTML of the rendered page, or FALSE on failure.
     */
    public function render(){
        if($this->pageIsLoaded()){
            // check cached page.
                        
            // grab the root container and throw it to the mercy of the containerManager!
            
            $this->containerManager->loadRootContainer($this->page->root_container);
            $this->containerManager->doThatFunkyShit();
            
            
            // return put together page.
            return $this->page;
        }
        return FALSE;        
    }       
}

?>