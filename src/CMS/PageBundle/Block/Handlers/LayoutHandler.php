<?php

namespace CMS\PageBundle\Block;

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
        if($this->block->)
    }
    
    public function getRenderedContent(){
        return $this->renderedContent;
    }
    
    public function getContents(){
        
    }
    
    public function setContents(){
        
    }
   
}