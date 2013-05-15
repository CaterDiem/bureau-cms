<?php


namespace CMS\PageBundle\Layout;

use FOS\RestBundle\Controller\FOSRestController;


/**
 * Description of LayoutCRUDController
 *
 * @author jtemplet
 */
class LayoutCRUDController extends FOSRestController
{        
    public function getLayoutsAction(){
        $layoutManager = $this->get('layout_manager');
        if($layoutManager->loadAll()){
            $layouts = $layoutManager->getLayout();
            $response = array();
            foreach($layouts as $layout){
                $response[] = array(
                    'id' => $layout->getId(),
                    'name' => $layout->getName(),
                    'author' => $layout->getAuthor()->getUsername(),
                    'rootBlockId' => $layout->getRootBlock()->getId(),    
                );
            }
            $view = $this->view($response, 200);            
                
        }else{
            $view = $this->view(FALSE, 404); 
        }
                        
        return $this->handleView($view);                
    } // read all
    
    public function getLayoutAction($id){
        $layoutManager = $this->get('layout_manager');
        if($layoutManager->loadById($id)){
            $layout = $layoutManager->getLayout();
                        
            $response = array(
                'id' => $layout->getId(),
                'name' => $layout->getName(),
                'created' => $layout->getCreated(),
                'updated' => $layout->getUpdated(),                
                'author' => $layout->getAuthor()->getUsername(),
                'rootBlockId' => $layout->getRootBlock()->getId(),
                
            );
            $view = $this->view($response, 200);            
                
        }else{
            $view = $this->view(FALSE, 404); 
        }
                        
        return $this->handleView($view);        
    } // read
    
    public function postLayoutAction(){
        
    } // create
    
    public function putLayoutAction($id){
        
    } // update
    
    public function deleteLayoutAction($id){
        
    } // delete
}
