<?php

namespace CMS\PageBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use CMS\SharedBundle\Entity\Page as Page;
/**
 * Description of RenderPageController
 *
 * @author jtemplet
 */
class RenderPageController extends Controller {

    protected $request;
    protected $response;    
    
    public function __construct(){          

    }    
    /**
     * View / Render a page.
     * Generally this will load the pre-rendered/cached page.
     * @param type $pageSlug
     * @author jtemplet
     */
    public function viewAction($pageSlug) {        
     
        $this->response = $this->container->get('response');        
       
        $pageManager = $this->get('page_manager');
        $pageManager->loadBySlug($pageSlug);
        if($pageManager->pageIsLoaded()){                        
            return $this->render('CMSPageBundle:Default:renderPage.html.twig', array('page' => $pageManager->page));
        }
        // otherwise page not found. 404 time.        
        $this->response->setStatusCode('404');
        $this->response->setContent($this->render('CMSPageBundle:Default:errorPage.html.twig', array('pageSlug' => $pageSlug)));        
        
        return $this->response;        
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
