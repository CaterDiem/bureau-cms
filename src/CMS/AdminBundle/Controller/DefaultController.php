<?php

namespace CMS\AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('CMSAdminBundle:Default:index.html.twig', array('name' => $name));
    }
}
