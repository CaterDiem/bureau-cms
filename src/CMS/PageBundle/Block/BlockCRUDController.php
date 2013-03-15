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
            $view = $this->view($response, 200);            
                
        }else{
            $view = $this->view(FALSE, 404); 
        }
                        
        return $this->handleView($view);        
    } 
    
    
    public function postBlockAction(){
        $blockManager = $this->get('block_manager');
        
    } // create
    
    public function putBlockAction($id){
        
    } // update
    
    public function deleteBlockAction($id){
        
    } // delete

    
   public function getInstanceAction($id){
        $blockManager = $this->get('block_manager');
        if($blockManager->getByInstanceId($id)){
            $blockInstance = $blockManager->getBlockInstance();            
            $block = $blockInstance->getBlock();
            $response = array(
                'id' => $blockInstance->getId(),
                'template' => $blockInstance->getTemplate()->getFilepath(),
                'block' => array(
                    'id' => $block->getId(),
                    'name' => $block->getName(),
                    'created' => $block->getCreated(),
                    'updated' => $block->getUpdated(),
                    'content' => array(
                        'id' => $block->getContent()->getId(), 
                        'content' => $block->getContent()->getContent(),
                    ),
                ),
            );
            $response['html'] = $blockManager->generateBlock($block, $blockInstance->getTemplate());
            $view = $this->view($response, 200);            
                
        }else{
            $view = $this->view(FALSE, 404); 
        }
                        
        return $this->handleView($view);        
    } 
     
    
    public function postInstanceAction(){
        
    } // create
    
    public function putInstanceAction($id){
        
    } // update
    
    public function deleteInstanceAction($id){
        
    } // delete
}
