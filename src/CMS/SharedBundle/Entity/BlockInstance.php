<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * BlockInstance
 */
class BlockInstance
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
     * @var \CMS\SharedBundle\Entity\Block
     */
    private $parent;

    /**
     * @var \CMS\SharedBundle\Entity\Template
     */
    private $template;

    /**
     * @var \CMS\SharedBundle\Entity\Block
     */
    private $block;


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
     * @return BlockInstance
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
     * @param \CMS\SharedBundle\Entity\Block $parent
     * @return BlockInstance
     */
    public function setParent(\CMS\SharedBundle\Entity\Block $parent = null)
    {
        $this->parent = $parent;
    
        return $this;
    }

    /**
     * Get parent
     *
     * @return \CMS\SharedBundle\Entity\Block 
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * Set template
     *
     * @param \CMS\SharedBundle\Entity\Template $template
     * @return BlockInstance
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
     * Set block
     *
     * @param \CMS\SharedBundle\Entity\Block $block
     * @return BlockInstance
     */
    public function setBlock(\CMS\SharedBundle\Entity\Block $block = null)
    {
        $this->block = $block;
    
        return $this;
    }

    /**
     * Get block
     *
     * @return \CMS\SharedBundle\Entity\Block 
     */
    public function getBlock()
    {
        return $this->block;
    }
}
