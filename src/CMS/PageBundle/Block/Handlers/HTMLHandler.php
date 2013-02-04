<?php

namespace CMS\PageBundle\Block\Handlers;

/**
 * Description of HTMLHandler
 *
 * @author jtemplet
 */
class HTMLHandler extends BlockHandler{
      
    public function render(){    
                
        $this->renderedContent = $this->engine->render(
            $this->template->getFilepath(),
            array(
                'content' => $this->block->getContent()->getContent(),   
                'block' => $this->block,
                'handler' => $this
            )
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