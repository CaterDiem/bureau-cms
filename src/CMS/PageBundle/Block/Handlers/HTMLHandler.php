<?php

namespace CMS\PageBundle\Block\Handlers;

/**
 * Description of HTMLHandler
 *
 * @author jtemplet
 */
class HTMLHandler extends BlockHandler{
      
    public function render(){    
                
        
        $this->setVariable('content', $this->block->getContent()->getContent());
        
        $this->renderedContent = $this->engine->render(
            $this->template->getFilepath(),
            $this->variables
        );            
        
        return TRUE;
    }
    
    public function getContents(){
        ;
    }
    
    public function setContents() {
        ;
    }
}