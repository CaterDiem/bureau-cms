<?php

namespace CMS\AdminBundle\Admin;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Validator\ErrorElement;
use Sonata\AdminBundle\Form\FormMapper;

/**
 * Description of PageAdmin
 *
 * @author jtemplet
 */
class PageAdmin extends Admin {

    protected function configureFormFields(FormMapper $formMapper) {
        $formMapper
                ->add('name')
                ->add('author')
                ->add('currentPageRevision')
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper) {
        $datagridMapper
                ->add('name')
                ->add('author')
                
        ;
    }

    protected function configureListFields(ListMapper $listMapper) {
        $listMapper
                ->addIdentifier('name')
                ->add('author')
                ->add('current_page_revision')                
        ;
    }

    public function validate(ErrorElement $errorElement, $object) {
        $errorElement
                ->with('name')                
                ->end()
        ;
    }

}
