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
class BlockCRUDController extends FOSRestController {

    public function getBlockAction($id) {
        $blockManager = $this->get('block_manager');
        if ($blockManager->getById($id)) {
            $block = $blockManager->getBlock();

            $response = $this->blockDetailsToArray($block);

            $view = $this->view($response, 200);
        } else {
            $view = $this->view(FALSE, 404);
        }

        return $this->handleView($view);
    }

    public function postBlockAction() {
        $blockManager = $this->get('block_manager');
    }

// create

    public function putBlockAction($id) {
        
    }

// update

    public function deleteBlockAction($id) {
        
    }

// delete

    public function getInstanceAction($id) {
        $blockManager = $this->get('block_manager');
        if ($blockManager->getByInstanceId($id)) {
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
        } else {
            $view = $this->view(FALSE, 404);
        }

        return $this->handleView($view);
    }

    public function postInstanceAction() {
        
    }

// create

    public function putInstanceAction($id) {
        
    }

// update

    public function deleteInstanceAction($id) {
        
    }

// delete

    public function blockDetailsToArray($block) {
        $response = array(
            'id' => $block->getId(),
            'name' => $block->getName(),
            'created' => $block->getCreated(),
            'updated' => $block->getUpdated(),
            'sortOrder' => $block->getParents()->first()->getSortOrder(),
            'children' => $block->getInstances()->count()
        );
        if ($block->getContent()) {
            $response['content'] = array(
                'id' => $block->getContent()->getId(),
                'content' => $block->getContent()->getContent(),
                'editor' => $block->getContent()->getEditor()->getUsername()
            );
        }
        return $response;
    }

    // block/{$id}/children responses.    
    public function getBlockChildrenAction($id) {
        $blockManager = $this->get('block_manager');
        if ($blockManager->getById($id)) {
            $response = array();
            $response = $this->recursivelyProcessChildren($blockManager->getBlock()->getInstances());

            $view = $this->view($response, 200);
        } else {
            $view = $this->view(FALSE, 404);
        }

        return $this->handleView($view);
    }

// get

    public function postBlockChildrenAction($id) {
        
    }

// create

    public function putBlockChildrenAction($id) {
        
    }

// update

    public function deleteBlockChildrenAction($id) {
        
    }

// delete

    protected function recursivelyProcessChildren($blockInstance) {
        if ($blockInstance) {
            $response = array();
            foreach ($blockInstance as $instance) {
                $block = $instance->getBlock();
                $responseInstance = $this->blockDetailsToArray($block);
                $responseInstance['children'] = $this->recursivelyProcessChildren($block->getInstances());
                
                $response[] = $responseInstance;
            }
            return $response;
        }
        return FALSE;
    }

}