<?php

namespace CMS\PageBundle\Block;

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
    
    /**
     * Check if the blockManager has a block correctly loaded into it.
     * @return boolean
     */
    public function isLoaded(){
        return $this->isLoaded;
    }

    /**
     * Load a block based on its database ID
     * @param type $id
     * @return boolean
     */
    public function getById($id){
         $block = $this->em->getRepository('CMSSharedBundle:Block')->find($id);
         if($block){
            $this->logger->debug("BlockManager:getById - Attempting to load block {$id}:{$block->getName()}");
            $this->load($block);            
         }
         if($this->isLoaded()){             
            return TRUE;         
         }
         $this->logger->err("BlockManager:getById - Unable to load block {$id}");
         return FALSE;
    }
    
    /**
     * Load the block
     * @params Block $block The block to load. Doesn't need to be a root block.
     * @return boolean TRUE on success or FALSE on failure
     */
    public function load(Block $block){         
        if($block->getName()){
            $this->isLoaded = TRUE;
            $block->numChildren = $block->getInstances()->count();
            $this->block = $block;                        
            $this->logger->debug("BlockManager:load - Block {$block->getId()}:{$block->getName()} loaded.");
        }
                
        return $this->isLoaded();
    }
            
    /**
     * Generate this block as a html fragment. 
     * 
     * @return boolean Whether the content for this block has been successfully generated or not
     */
    public function generate(){        
        if($this->block){            
            
            $this->logger->debug("BlockManager:generate - Loaded rootblock {$this->block->getName()}");
            
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
    
    /**
     * Getter for loaded block
     * @return Block|boolean The block if loaded, otherwise false.
     */
    public function getBlock(){
        if($this->isLoaded()){
            return $this->block;
        }
        return FALSE;
    }
    
}