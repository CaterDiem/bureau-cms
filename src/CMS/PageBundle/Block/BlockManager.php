<?php

namespace CMS\PageBundle\Block;

use CMS\SharedBundle\Entity\Block;
use CMS\PageBundle\Block\Handlers\BlockHandler;
use Doctrine\ORM\EntityManager;
use Symfony\Component\Templating\EngineInterface;

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

    public function __construct(EntityManager $em, EngineInterface $templating) {        
        $this->em = $em;
        $this->engine = $templating;
        $this->block = FALSE;
        $this->generatedContent = FALSE;
        $this->blockContent = '';
        
    }
    
    public function isLoaded(){
        return $this->isLoaded;
    }

    /**
     * Load the block
     * @params Block $block The block to load. Doesn't need to be a root block.
     * @return boolean TRUE on success or FALSE on failure
     */
    public function loadBlock(Block $block){         
        if($block->getName()){
            $this->isLoaded = TRUE;
            $block->numChildren = $block->getChild()->count();
            $this->block = $block;            
        }
                
        return $this->isLoaded();
    }
            
    public function generate(){
        $blockHandler = BlockHandler::create($block);
        
        $this->generatedContent = $blockHandler->render();        
        
        if($this->generatedContent){
            return TRUE;
        }
        return FALSE;
    }
    
    public function getGeneratedContent(){
        return $this->generatedContent();        
    }
    
}