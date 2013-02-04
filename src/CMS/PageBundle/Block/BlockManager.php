<?php

namespace CMS\PageBundle\Block;

use CMS\PageBundle\Block\Handlers\BlockHandler as BlockHandler;
use CMS\SharedBundle\Entity\Block;
use Doctrine\ORM\EntityManager;
use Symfony\Bridge\Monolog\Logger;

/**
 * BlockManager is used to find, load and modify blocks.
 *
 * @author jtemplet
 */
class BlockManager {
    
    protected $em;
    protected $engine;
    
    protected $block;
    
    
    private $generatedContent;
    protected $isLoaded = FALSE;

    public function __construct(EntityManager $em, $container, Logger $logger) {        
        $this->em = $em;
        $this->container = $container;
        $this->engine = $this->container->get('templating');
        $this->block = FALSE;
        $this->generatedContent = FALSE;
        $this->blockContent = '';
        $this->logger = $logger;
        
    }
    
    public function isLoaded(){
        return $this->isLoaded;
    }

    /**
     * Load the block
     * @params Block $block The block to load. Doesn't need to be a root block.
     * @return boolean TRUE on success or FALSE on failure
     */
    public function load(Block $block){         
        if($block->getName()){
            $block->isLoaded = TRUE;
            $block->numChildren = $block->getInstances()->count();
            $this->block = $block;                        
        }
                
        return $this->isLoaded();
    }
            
    public function generate(){
        //$blockHandler = BlockHandler::create($this->block, $this->engine);
        if($this->block){            
            
            $this->logger->info("Loaded rootblock {$this->block->getName()}");
            
            // render all instances in this block. 
            foreach($this->block->getInstances() as $instance){
                $blockHandler = $this->container->get('block_handler');
                $instanceHandler = $blockHandler->get_handler($instance->getBlock(), $instance->getTemplate());                
                if($instanceHandler->render()){
                    $this->generatedContent .= $instanceHandler->getRenderedContent();
                }
            }
            
            if($this->generatedContent){
                return TRUE;
            }            
        }
        return FALSE;
    }
    
    public function getGeneratedContent(){
        return $this->generatedContent;        
    }
    
    public function createRootBlock($name){
        $block = new Block();
        $block->setName("{$name}Root");
        $this->em->persist($block);
        return $block;               
    }
    
}