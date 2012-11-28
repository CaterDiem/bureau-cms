<?php

namespace CMS\SharedBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('CMSSharedBundle:Default:index.html.twig', array('name' => $name));
    }
    
    public function layoutTestAction(){
        $pageVars = array(
            'title' => 'Defence CMS Layout Test',
            'content' => 'Lorem ipsum etc etc.',
            'code' => TRUE,
        );
        
        return $this->render('CMSSharedBundle:Layout:layoutTest.html.twig', $pageVars);
    }
}