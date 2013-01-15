<?php

/**
 * Description of ContainerChildReference
 *
 * @author jtemplet
 */
class ContainerChildReference {

    public function getParent(){
        $this->getChild()->getParent();
    }
        
    public function getName(){
        $this->getChild()->getName();
    }
    
    public function addChild(){
        $this->getChild()->addChild();
    }
}

?>
