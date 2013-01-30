<?php

namespace CMS\PageBundle\Block\Handlers;

use CMS\SharedBundle\Entity\Block;
use CMS\SharedBundle\Entity\Template;
use CMs\SharedBundle\Entity\BlockSetting;
/**
 * 
 * @author jtemplet
 */

class LayoutHandler extends BlockHandler {
    
    public function render(){
        // layouts contain other blocks inside them. We need to recursively load and render those blockInstances.        
        
        $content = "";
        
        if($this->block->getInstances()->count() > 0){
            $content .= $this->renderInstances();
        }
        
        $this->renderedContent = $this->engine->render(
            $this->template->getFilepath(),
            array(
                'content' => $content,      
                'block' => $this->block,
            )
        );            
        return TRUE;
    }
    
    private function renderInstances(){
        $renderedContent = "";
        
        foreach($this->block->getInstances() as $instance){
            $childBlock = $this->get_handler($instance->getBlock(), $instance->getTemplate());
            
            if($childBlock->render()){
                $renderedContent .= $childBlock->getRenderedContent();                
            }
        }
        
        return $renderedContent;
    }
       
    public function getContents(){
        
    }
    
    public function setContents(){
        
    }
   
}