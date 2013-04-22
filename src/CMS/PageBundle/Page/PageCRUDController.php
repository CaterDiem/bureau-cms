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
    
    public function postPagesAction(){        
        $request = $this->get('request');
        //var_dump($request->request->all());
        
        $pageManager = $this->get('PageManager');
        $pageManager->createPage($request->request->all());
        $page = $pageManager->getPage();
        
        $response = array(        
            'id' => $page->getId(),       
            'name' => $page->getName(),
            'slug' => $page->getSlug()
        );
        $view = $this->view($response, 200);            
        
        return $this->handleView($view);
        
    }
    
    public function putPagesAction(){
        
    }
    
    public function deletePagesAction(){
        
    }    
}
