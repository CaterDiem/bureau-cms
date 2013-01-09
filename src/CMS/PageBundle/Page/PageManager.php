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
    
    public function pageIsLoaded(){
        if($this->page){
            return TRUE;
        }
        return FALSE;
    }
           
    public function getPage(){
        if($this->pageIsLoaded()){
            // check cached page.
                        
            // load and render containers
                                    
            // return put together page.
            return $this->page;
        }
        return FALSE;        
    }

}

?>
