<?php

namespace CMS\AdminBundle\Admin;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Validator\ErrorElement;

/**
 * Description of PageAdmin
 *
 * @author jtemplet
 */
class PageAdmin extends Admin {
    
    protected $pageManager;

    protected function configureFormFields(FormMapper $formMapper) {
        $formMapper
            ->with('Page')
                ->add('name')
                ->add('slug')
                ->add('author')
            ->end()
            ->with('Revision')
                //->add('current_page_revision', 'array')                
            ->end()
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper) {
        $datagridMapper
                ->add('name')
                ->add('slug')
                ->add('author')
        ;
    }

    protected function configureListFields(ListMapper $listMapper) {
        $listMapper
                ->addIdentifier('name')
                ->add('slug')
                ->add('author')
                ->add('current_page_revision')                
        ;
    }

    public function validate(ErrorElement $errorElement, $object) {
        // WORK THIS SHIT OUT
        /*$errorElement
                ->with('name')    
                    ->assertNotBlank()
                ->end()
                ->with('slug')                    
                ->end()
                ->with('author')
                    ->addViolation("You need to select an author")
                ->end()
        ;*/
    }
    
    public function postPersist($page){
        $this->getPageManager()->createInitialPageRevision($page);
    }
    
    public function setPageManager(\CMS\PageBundle\Page\PageManager $pageManager){        
        $this->pageManager = $pageManager;
    }
    
    public function getPageManager(){
        return $this->pageManager;
    }

}
