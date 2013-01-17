<?php

namespace CMS\PageBundle\Block;

/**
 * Description of HTMLHandler
 *
 * @author jtemplet
 */
class HTMLHandler extends BlockHandler{
    //put your code here
    
    public function render(){
        
        if($block && $blockInstance->getCurrentRevision()){
            $blockHandler = BlockHandler::create($blockInstance);
            $child->generatedContent = $blockHandler->render();

            $child->generatedContent = $this->engine->render("CMSPageBundle:Default:renderPage.html.twig", array(
                'content' => $child->getBlock()->getCurrentRevision()->getContent(),                
            ));            
            $this->blockContent .= $child->generatedContent;                    
        }

    }
    
    public function getContents(){
        ;
    }
    
    public function setContents() {
        ;
    }
}

?>
