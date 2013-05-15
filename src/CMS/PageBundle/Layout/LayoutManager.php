<?php

namespace CMS\PageBundle\Layout;

use CMS\PageBundle\Block\BlockManager;
use Doctrine\ORM\EntityManager;
use Symfony\Component\Templating\EngineInterface;
use Symfony\Bridge\Monolog\Logger;

use CMS\SharedBundle\Entity\Layout;
use CMS\SharedBundle\Entity\Block;
use CMS\SharedBundle\Entity\BlockRevision;
use CMS\SharedBundle\Entity\Page;



/**
 * LayoutManager is used to find, load and modify layouts.
 *
 * @author jtemplet
 */
class LayoutManager {
    
    protected $em;
    protected $blockManager;
    protected $engine;
    protected $container; 
    
    protected $layout;    
    
    protected $generatedContent;

    public function __construct(EntityManager $em, BlockManager $blockManager, $container, Logger $logger) {
        $this->em = $em;
        $this->container = $container;
        $this->engine = $this->container->get('templating');
        $this->blockManager = $blockManager;
        $this->layout = FALSE;
        $this->generatedContent = FALSE;
        $this->logger = $logger;
    }

    public function loadByName($layoutName) {
        $this->layout = $this->em->getRepository('CMSSharedBundle:Layout')
                ->findOneByName($layoutName);
        if ($this->layout) {         
                return TRUE;
        }
        return FALSE;
    }
        
    public function loadById($layoutId) {
        $this->layout = $this->em->getRepository('CMSSharedBundle:Layout')
                ->findOneById($layoutId);
        if ($this->layout) {         
                return TRUE;
        }
        return FALSE;
    }
    
    public function loadAll(){
        $this->layout = $this->em->getRepository('CMSSharedBundle:Layout')
                ->findAll();
        if($this->layout){
            return TRUE;
        }
        return FALSE;
    }
    
    
    public function isLoaded(){
        if($this->layout){
            return TRUE;
        }
        return FALSE;
    }
    
    /**
     * Converts the passed Page into a seperate Layout object
     * @param CMS\SharedBundle\Entity\Page $page
     * @return boolean
     */
    public function convertPageToLayout(CMS\SharedBundle\Entity\Page $page){        
        $newBlockTree = $page->getRootBlock();
        
        $layout = new Layout();
                
        return TRUE;
    }
    
    public function getLayout(){
        if($this->isLoaded()){
            return $this->layout;
        }
        return FALSE;
    }
                  
    /**
     * Render the layout to HTML
     * @return boolean Returns TRUE on success, or FALSE on failure.
     */
    public function render(){
        if($this->isLoaded()){
            // check cached layout.
                        
            // grab the root block and throw it to the mercy of the blockManager!            
            if($this->layout->getCurrentRevision()){                
                
                $this->blockManager->load($this->currentRevision->getRootBlock());            
                
                if($this->blockManager->generate()){
                    $this->generatedContent .= $this->blockManager->getGeneratedContent();
                }
                
                if($this->generatedContent){
                    
                    return TRUE;
                }
            }                        
            
            
        }
        return FALSE;        
    }       
    
    public function getContent(){        
        return $this->generatedContent;
    }       
        
}
