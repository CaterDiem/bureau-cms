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
class BlockAdmin extends Admin {

    protected function configureFormFields(FormMapper $formMapper) {
        $formMapper
                ->add('name')
                ->add('description', null, array('required' => false))
                //->add('instances', 'sonata_type_collection')
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper) {
        $datagridMapper
                ->add('name')
                
        ;
    }

    protected function configureListFields(ListMapper $listMapper) {
        $listMapper
                ->addIdentifier('name')
                ->addIdentifier('description')
                ->add('enabled')
        ;
    }

    public function validate(ErrorElement $errorElement, $object) {
        $errorElement
                ->with('name')                
                ->end()
        ;
    }

}
