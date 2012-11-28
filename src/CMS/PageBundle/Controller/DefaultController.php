<?php

namespace CMS\PageBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($section)
    {
        return $this->render('CMSPageBundle:Default:index.html.twig', array('name' => $section));
    }
}
