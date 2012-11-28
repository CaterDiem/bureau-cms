<?php

namespace CMS\PageBundle\Controller;

// example: namespace CMS\SIMS\DatabaseBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Description of RenderPageController
 *
 * @author jtemplet
 */
class RenderPageController extends Controller {

    /**
     * View / Render a page.
     * Generally this will load the pre-rendered/cached page.
     * @param type $pageSlug
     * @author jtemplet
     */
    public function viewAction($pageSlug) {        
        $page = new \stdClass();
        $page->slug = $pageSlug;
        
        return $this->render('CMSPageBundle:Default:renderPage.html.twig', array('page' => $page));
    }
    
    /**
     * View a page in edit mode.
     * @param type $pageSlug
     * @return html 
     */
    public function editAction($pageSlug) {
        return $this->render('Bundle:Default:index.html.twig', array());
    }
    
    public function editProcessAction($pageSlug) {
        return new RedirectResponse($this->generateUrl('cms_page_edit', array('pageSlug'=>$pageSlug)));
    }
}
