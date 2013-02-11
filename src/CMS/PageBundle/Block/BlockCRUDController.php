<?php

/*
 * DONT FORGET TO RENAME THE CLASSFILE to BlockCRUDController 
 */

namespace CMS\PageBundle\Block;

use FOS\RestBundle\Controller\FOSRestController;


/**
 * Description of BlockCRUDController
 *
 * @author jtemplet
 */
class BlockCRUDController extends FOSRestController
{        
    
    public function getBlockAction($id){
        $blockManager = $this->get('block_manager');
        if($blockManager->getById($id)){
            $block = $blockManager->getBlock();            
            $response = array(
                'id' => $block->getId(),
                'name' => $block->getName(),
                'created' => $block->getCreated(),
                'updated' => $block->getUpdated(),
                'content' => array(
                    'id' => $block->getContent()->getId(), 
                    'content' => $block->getContent()->getContent(),
                ),
            );
            $view = $this->view($block, 200);            
                
        }else{
            $view = $this->view(FALSE, 404); // pass block anyway, though it just equates to FALSE
        }
                        
        return $this->handleView($view);
        //return new Response($blockManager->getBlock(), $id);
    } 
    
    
    public function postBlockAction(){
        
    } // create
    
    public function putBlockAction(){
        
    } // update
    
    public function deleteBlockAction(){
        
    } // delete
}
