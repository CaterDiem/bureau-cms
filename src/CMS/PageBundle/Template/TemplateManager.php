<?php

namespace CMS\PageBundle\Template;

use Doctrine\ORM\EntityManager;
use Symfony\Bridge\Monolog\Logger;

/**
 * Description of TemplateManager
 *
 * @author jtemplet
 */
class TemplateManager 
{

    protected $em;    
    protected $engine;
    
    protected $isLoaded = FALSE;   
    protected $template;
    
    /**
     * Constructor!
     */
    public function __construct(EntityManager $em, $container, Logger $logger) {        
        $this->em = $em;
        $this->container = $container;
        $this->engine = $this->container->get('templating');        
        $this->logger = $logger;
        return $this;
    }
    
    protected function load($template){        
        $this->template = $template;
        $this->isLoaded = TRUE;
        return $this;
    }
    
    /**
     * Check if the templateManager has a template correctly loaded into it.
     * @return boolean
     */
    public function isLoaded(){
        return $this->isLoaded;
    }
    
    private function getRepository(){
         return $this->em->getRepository('CMSSharedBundle:Template');         
    }

    /**
     * Load a template based on its database ID
     * @param type $id
     * @return boolean
     */
    public function getById($id){
         $template = $this->getRepository()->find($id);
         if($template){
            $this->logger->debug("TemplateManager:getById - Attempting to load template {$id}:{$template->getName()}");
            $this->load($template);            
         }
         if($this->isLoaded()){             
            return TRUE;         
         }
         $this->logger->err("TemplateManager:getById - Unable to load template {$id}");
         return FALSE;
    }           
    
    public function getAll(){
        $template = $this->getRepository()->findAll();
         if($template){
            $this->logger->debug("TemplateManager:getAll - loaded all templates in system");
            $this->isLoaded = TRUE;
            return TRUE;
         }   
         
         $this->logger->err("TemplateManager:getById - Unable to load template {$id}");
         return FALSE;
    }
    
    public function getByType(){
        return FALSE;
    }
    
    public function getTemplate(){
        return $this->template;
    }
    
    public 
    
    public function render(){
        
    }
    
    public function getRenderedContents(){
        return $this->renderedTemplate;
    }
}