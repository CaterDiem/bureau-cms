<?php

namespace CMS\SharedBundle\Controller;

// example: namespace CMS\SIMS\DatabaseBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use CMS\SharedBundle\Entity\Page;
use CMS\SharedBundle\Entity\Container;
use CMS\SharedBundle\Entity\User;

/**
 * Description of DatabaseTestController
 *
 * @author jtemplet
 */
class DatabaseTestController extends Controller {

    /**
     * Default action - Index
     *
     * @author jtemplet
     */
    public function indexAction() {
        return $this->render('Bundle:Default:index.html.twig', array());
    }
    
    public function databaseTestAction() {
        $em = $this->getDoctrine()->getManager();
        
        
        
        $page = new Page();
        $page->setName('Jez\'s Test Page');
        
        $em->persist($page);
        $em->flush();
        
        return $this->render('Bundle:Database:databaseTest.html.twig', array());               
        
    }

}
