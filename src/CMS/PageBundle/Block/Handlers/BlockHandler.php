<?php

namespace CMS\PageBundle\Block\Handlers;

use CMS\SharedBundle\Entity\Block;
use CMS\SharedBundle\Entity\Template;
use CMs\SharedBundle\Entity\BlockSetting;
use Symfony\Component\Templating\EngineInterface;


/**
 * BlockHandler is an  class that is extended by all block handlers. 
 * It details how they should act, and provides generalised functions that all blocks can use.
 *
 * @author jtemplet
 */
class BlockHandler{
    
    protected $block;
    protected $template;
    protected $renderedContent;    
    protected $engine;
        
    public function __construct(EntityManager $em, $container, Logger $logger, Template $template, Block $block){
        $this->block = $block;        
        $this->engine = $this->get('templating');
        $this->renderedContent = "";
        $this->template = $template;        
        $this->logger = $this->get('logger');
    }
    /**
     * Return an instance of a BlockHandler implementor, based on the blockType of the passed block.
     * @param \CMS\SharedBundle\Entity\Block $block
     * @return \CMS\PageBundle\Block\handlerClass|boolean
     */
    public static function create(Block $block, $engine, $template){
        $handlerClass = "CMS\\PageBundle\\Block\\Handlers\\{$block->getType()->getName()}Handler";        
                
        if(class_exists($handlerClass, TRUE)){            
            $handler = new $handlerClass($block, $engine, $template);
            var_dump($block->getName(), $handlerClass);
            return $handler;            
        }            
        
        return FALSE;
    }
                
    public function render(){}
        
    public function getContents(){}    
    
    public function setContents(){}
    
    public function getRenderedContent(){
        return $this->renderedContent;
    }
    
    public function getSettings(){
        
    }
    
    public function setSettings(){
        
    }
}