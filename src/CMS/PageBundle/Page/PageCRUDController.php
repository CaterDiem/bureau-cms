<?php

namespace CMS\PageBundle\Page;

use FOS\RestBundle\Controller\FOSRestController;


/**
 * Description of PageCRUDController
 *
 * @author jtemplet
 */
class PageCRUDController extends FOSRestController
{        
    
    public function getPageAction($id){
        $pageManager = $this->get('PageManager');
        $pageManager->loadById($id);
        if($pageManager->isLoaded()){
            $view = $this->view($pageManager->getPage(), 200);
        }else{
            $view = $this->view(FALSE, 404); 
        }
                        
        return $this->handleView($view);            
    }
    
    public function postPageAction(){
        
    }
    
    public function putPageAction(){
        
    }
    
    public function deletePageAction(){
        
    }    
}
