<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CMS\SharedBundle\Entity\ContainerChild
 */
class ContainerChild
{
    /**
     * @var integer $id
     */
    private $id;

    /**
     * @var integer $sortOrder
     */
    private $sortOrder;

    /**
     * @var CMS\SharedBundle\Entity\Container
     */
    private $container;

    /**
     * @var CMS\SharedBundle\Entity\Container
     */
    private $child;


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set sortOrder
     *
     * @param integer $sortOrder
     * @return ContainerChild
     */
    public function setSortOrder($sortOrder)
    {
        $this->sortOrder = $sortOrder;
    
        return $this;
    }

    /**
     * Get sortOrder
     *
     * @return integer 
     */
    public function getSortOrder()
    {
        return $this->sortOrder;
    }

    /**
     * Set container
     *
     * @param CMS\SharedBundle\Entity\Container $container
     * @return ContainerChild
     */
    public function setContainer(\CMS\SharedBundle\Entity\Container $container = null)
    {
        $this->container = $container;
    
        return $this;
    }

    /**
     * Get container
     *
     * @return CMS\SharedBundle\Entity\Container 
     */
    public function getContainer()
    {
        return $this->container;
    }

    /**
     * Set child
     *
     * @param CMS\SharedBundle\Entity\Container $child
     * @return ContainerChild
     */
    public function setChild(\CMS\SharedBundle\Entity\Container $child = null)
    {
        $this->child = $child;
    
        return $this;
    }

    /**
     * Get child
     *
     * @return CMS\SharedBundle\Entity\Container 
     */
    public function getChild()
    {
        return $this->child;
    }
}