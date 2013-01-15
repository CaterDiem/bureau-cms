<?php

namespace CMS\PageBundle\Container;

use CMS\SharedBundle\Entity\Container;
use CMS\SharedBundle\Entity\Template;
use CMs\SharedBundle\Entity\ContainerSetting;
/**
 * ContainerHandler is an abstract class that is extended by all container handlers. 
 * It details how they should act, and provides generalised functions that all containers can use.
 *
 * @author jtemplet
 */
abstract class ContainerHandler {
    
    private $container;
    private $template;
    private $renderedContent;
        
    public function __construct(Container $container, Template $template){
        $this->container = $container;
        $this->template = $template;        
    }
                
    abstract public function render(){
        
    }
    
    public function getRenderedContent(){
        return $this->renderedContent;
    }
    
    abstract public function getContents(){
        
    }
    
    abstract public function setContents(){
        
    }
    
    public function getSettings(){
        
    }
    
    public function setSettings(){
        
    }
}