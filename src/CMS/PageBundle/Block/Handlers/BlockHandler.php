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
    
    protected $cssClasses = array('span4', 'test');
    protected $htmlAttributes;
    protected $options;
    
        
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
        $handlerType = $block->getType()->getName();
        $handlerClass = "CMS\\PageBundle\\Block\\Handlers\\{$handlerType}Handler";        
                
        if(class_exists($handlerClass, TRUE)){            
            $handler = new $handlerClass($em, $container, $logger);            
            $handler->setBlock($block);
            $handler->setTemplate($template);
            $handler->logger->debug("Created handler {$handlerClass}:{$handler->block->getName()}[Template:{$handler->template->getName()}]");            
            $handler->initialiseVariables();
            $handler->setVariable('type', $handlerType);
            return $handler;            
        }            
        
        return FALSE;
    }
    
    public function initialiseVariables(){
        $this->variables = array(
                'content' => '',      
                'cssClasses' => $this->cssClasses,
                'htmlAttributes' => $this->htmlAttributes,
                'block' => $this->block,
                'handler' => $this
            );
        return TRUE;
    }
    
    /**
     * Adds a variable to the array. If a variable with the key $key already exists, it will become an array containing the old and new values.
     * @param type $key
     * @param type $value
     * @return boolean 
     */
    public function addVariable($key, $value){
        array_merge_recursive($this->variables, array($key => $value));
        return TRUE;
    }
    
    /**
     * Sets a variable. If a variable with the key $key already exists, any values contained in it will be overwritten.
     * @param type $key
     * @param type $value
     * @return boolean
     */
    public function setVariable($key, $value){
        $this->variables[$key] = $value;
        return TRUE;
    }
    
    /**
     * Unsets a variable. It will remove ALL values stored for the passed key.
     * @param type $key
     * @return boolean
     */
    public function removeVariable($key){    
        unset($this->variables[$key]);
        return TRUE;
    }
    /**
     * Gets a variable from the array. If it has no value, FALSE is returned.
     * @param type $key
     * @return mixed|boolean The variable if it exists, otherwise FALSE
     */
    public function getVariable($key){
        if(array_key_exists($key, $this->variables)){
            return $this->variables[$key];
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
    
    /** 
     * Return the status of whether the current user can edit this block 
     * @return boolean Whether current user can edit this block or not
     */
    public function blockIsEditable()
    {
        $this->securityContext = $this->container->get('security.context');
        if($this->securityContext->isGranted('EDIT', $this->block) ){
            return TRUE;
        }
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