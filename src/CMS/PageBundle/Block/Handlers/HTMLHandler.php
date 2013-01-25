<?php

namespace CMS\PageBundle\Block\Handlers;

/**
 * Description of HTMLHandler
 *
 * @author jtemplet
 */
class HTMLHandler extends BlockHandler{
    //put your code here
    
    public function render(){
    // TODO FIX THIS SHIT        
                
        $this->renderedContent = $this->engine->render(
            $this->template->getFilepath(),
            array(
                'content' => $this->block->getContent()->getContent(),   
                'block' => $this->block,
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