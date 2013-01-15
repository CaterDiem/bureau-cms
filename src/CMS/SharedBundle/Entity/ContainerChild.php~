<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ContainerChild
 */
class ContainerChild
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var integer
     */
    private $sortOrder;

    /**
     * @var \CMS\SharedBundle\Entity\Container
     */
    private $parent;

    /**
     * @var \CMS\SharedBundle\Entity\Template
     */
    private $template;

    /**
     * @var \CMS\SharedBundle\Entity\Container
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
     * Set parent
     *
     * @param \CMS\SharedBundle\Entity\Container $parent
     * @return ContainerChild
     */
    public function setParent(\CMS\SharedBundle\Entity\Container $parent = null)
    {
        $this->parent = $parent;
    
        return $this;
    }

    /**
     * Get parent
     *
     * @return \CMS\SharedBundle\Entity\Container 
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * Set template
     *
     * @param \CMS\SharedBundle\Entity\Template $template
     * @return ContainerChild
     */
    public function setTemplate(\CMS\SharedBundle\Entity\Template $template = null)
    {
        $this->template = $template;
    
        return $this;
    }

    /**
     * Get template
     *
     * @return \CMS\SharedBundle\Entity\Template 
     */
    public function getTemplate()
    {
        return $this->template;
    }

    /**
     * Set child
     *
     * @param \CMS\SharedBundle\Entity\Container $child
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
     * @return \CMS\SharedBundle\Entity\Container 
     */
    public function getChild()
    {
        return $this->child;
    }
}
