<?php

namespace CMS\PageBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


/**
 * Description of CRUDController
 *
 * @author jtemplet
 */
class CRUDController extends Controller
{
        
    /**
     * Default action - Index
     *
     * @author jtemplet
     */
    public function indexAction()
    {
        return $this->render('Bundle:Default:index.html.twig', array());
    }
    
    public function createAction(){
        
    }
    
    
}
