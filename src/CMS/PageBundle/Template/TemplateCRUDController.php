<?php

namespace CMS\PageBundle\Template;

use FOS\RestBundle\Controller\FOSRestController;
use CMS\SharedBundle\Entity\Template;

/**
 * Description of TemplateCRUDController
 *
 * @author jtemplet
 */
class TemplateCRUDController extends FOSRestController {

    public function getTemplateAction($id) {
        $templateManager = $this->get('template_manager');
        $response = FALSE;

        if ($templateManager->getById($id)) {
            $template = $templateManager->getTemplate();
            $response = array(
                'id' => $template->getId(),
                'name' => $template->getName(),
                'created' => $template->getCreated(),
                'updated' => $template->getUpdated(),
                'filepath' => $template->getFilepath(),
            );
        }

        if ($response) {
            $view = $this->view($response, 200);
        } else {
            $view = $this->view(FALSE, 404);
        }

        return $this->handleView($view);
    }

    public function getTemplatesAction() {
        $templateManager = $this->get('template_manager');
        $response = FALSE;

        if ($templateManager->getAll()) {
            $templates = $templateManager->getTemplates();
            $response = $templates;
        }

        if ($response) {
            $view = $this->view($response, 200);
        } else {
            $view = $this->view(FALSE, 404);
        }
    }

    public function postTemplateAction() {
        
    }

    public function putTemplateAction() {
        
    }

    public function deleteTemplateAction() {
        
    }

}
