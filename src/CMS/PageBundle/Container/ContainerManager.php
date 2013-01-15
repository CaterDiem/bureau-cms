<?php

namespace CMS\PageBundle\Container;

use Doctrine\ORM\EntityManager;
use CMS\SharedBundle\Entity\Page;
use CMS\SharedBundle\Entity\Container;

use Symfony\Component\Templating\EngineInterface;

/**
 * ContainerManager is used to find, load and modify containers.
 *
 * @author jtemplet
 */
class ContainerManager {
    
    protected $em;
    protected $engine;
    
    protected $containerBlock;
    
    private $generatedContent;

    public function __construct(EntityManager $em, EngineInterface $templating) {        
        $this->em = $em;
        $this->engine = $templating;
        $this->containerBlock = FALSE;
        $this->generatedContent = NULL;
        
    }

    /**
     * Load the container, and any children containers (and their children, etc etc).
     * @params Container $container The root container to load.
     * @return boolean TRUE on success or FALSE on failure
     */
    public function loadContainerTree(Container $containerBlock){
        $this->containerBlock = $containerBlock;                                               
        
                
        foreach($this->containerBlock->getParent() as $child){                         
            
            $child->generatedContent = $this->engine->render("CMSPageBundle:Default:renderPage.html.twig", array(
                'content' => $child->getChild()->getCurrentRevision()->getContent(),                
            ));            
            $this->containedContent .= $child->generatedContent;
        }

        $this->generatedContent .= $this->engine->render("CMSPageBundle:Bureau:Standard/base.html.twig", array(
            'content' => $this->containerBlock->getCurrentRevision()->getContent() . $this->containedContent,                
        ));

        
        
        
        return TRUE;
    }
    
    public function generate(){
        return $this->generatedContent;
    }
    
}