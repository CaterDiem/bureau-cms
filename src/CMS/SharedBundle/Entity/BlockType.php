<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * BlockType
 */
class BlockType
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var string
     */
    private $name;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $block;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->block = new \Doctrine\Common\Collections\ArrayCollection();
    }
    
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
     * Set name
     *
     * @param string $name
     * @return BlockType
     */
    public function setName($name)
    {
        $this->name = $name;
    
        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Add block
     *
     * @param \CMS\SharedBundle\Entity\Block $block
     * @return BlockType
     */
    public function addBlock(\CMS\SharedBundle\Entity\Block $block)
    {
        $this->block[] = $block;
    
        return $this;
    }

    /**
     * Remove block
     *
     * @param \CMS\SharedBundle\Entity\Block $block
     */
    public function removeBlock(\CMS\SharedBundle\Entity\Block $block)
    {
        $this->block->removeElement($block);
    }

    /**
     * Get block
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getBlock()
    {
        return $this->block;
    }
}
