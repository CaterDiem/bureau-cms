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

    protected function configureFormFields(FormMapper $formMapper) {
        $formMapper
                ->add('name')
                ->add('slug')
                ->add('author')
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

}
