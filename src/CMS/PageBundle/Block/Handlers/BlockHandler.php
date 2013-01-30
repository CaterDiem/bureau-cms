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
    
    protected $entityManager;
    protected $engine;
    protected $logger;
    protected $container;
    
    protected $renderedContent = "";
        
    public function __construct(\Doctrine\ORM\EntityManager $em, $container, \Symfony\Bridge\Monolog\Logger $logger){        
        $this->container = $container;
        $this->entityManager = $em;
        $this->engine = $this->container->get('templating');            
        $this->logger = $logger;
    }
    /**
     * Return an instance of a BlockHandler implementor, based on the blockType of the passed block.
     * @param \CMS\SharedBundle\Entity\Block $block
     * @return \CMS\PageBundle\Block\handlerClass|boolean
     */
    public static function create(Block $block, Template $template, \Doctrine\ORM\EntityManager $em, $container, \Symfony\Bridge\Monolog\Logger $logger){
        $handlerClass = "CMS\\PageBundle\\Block\\Handlers\\{$block->getType()->getName()}Handler";        
                
        if(class_exists($handlerClass, TRUE)){            
            $handler = new $handlerClass($em, $container, $logger);            
            $handler->setBlock($block);
            $handler->setTemplate($template);
            $handler->logger->info("Created handler {$handlerClass}:{$handler->block->getName()}[Template:{$handler->template->getName()}]");
            return $handler;            
        }            
        
        return FALSE;
    }
    
    public function get_handler(Block $block, Template $template){
        $handler = BlockHandler::create($block, $template, $this->entityManager, $this->container, $this->logger);        
        return $handler;
    }
                    
    public function render(){}
        
    protected function setBlock(Block $block){
        $this->block = $block;
        return TRUE;
    }
    
    protected function setTemplate(Template $template){
        $this->template = $template;
        return TRUE;
    }
    
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