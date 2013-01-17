<?php

namespace CMS\PageBundle\Block;

use CMS\SharedBundle\Entity\Block;
use CMS\SharedBundle\Entity\Template;
use CMs\SharedBundle\Entity\BlockSetting;
/**
 * BlockHandler is an abstract class that is extended by all block handlers. 
 * It details how they should act, and provides generalised functions that all blocks can use.
 *
 * @author jtemplet
 */
abstract class BlockHandler {
    
    protected $block;
    protected $template;
    protected $renderedContent;    
        
    public function __construct(Block $block, Template $template){
        $this->block = $block;
        $this->template = $template;                
    }
    /**
     * Return an instance of a BlockHandler implementor, based on the blockType of the passed block.
     * @param \CMS\SharedBundle\Entity\Block $block
     * @return \CMS\PageBundle\Block\handlerClass|boolean
     */
    public static function create(Block $block){
        $handlerClass = "{$block->type}Handler";
        if(class_exists($handlerClass)){            
            $handler = new $handlerClass($block, $template);
            return $handler;
        }            
        
        return FALSE;
    }
                
    abstract public function render();
        
    abstract public function getContents();
    
    abstract public function setContents();
    
    public function getRenderedContent(){
        return $this->renderedContent;
    }
    
    public function getSettings(){
        
    }
    
    public function setSettings(){
        
    }
}