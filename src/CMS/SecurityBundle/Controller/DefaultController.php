<?php

namespace CMS\SecurityBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class DefaultController extends Controller
{
    
    public function indexAction($name)
    {
        return $this->render('CMSSecurityBundle:Default:index.html.twig', array('name' => $name));
    }
}
