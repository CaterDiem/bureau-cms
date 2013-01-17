<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Block
 */
class Block
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
     * @var string
     */
    private $description;

    /**
     * @var \DateTime
     */
    private $created;

    /**
     * @var \DateTime
     */
    private $updated;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $parent;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $child;

    /**
     * @var \CMS\SharedBundle\Entity\BlockType
     */
    private $type;

    /**
     * @var \CMS\SharedBundle\Entity\BlockRevision
     */
    private $currentRevision;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->parent = new \Doctrine\Common\Collections\ArrayCollection();
        $this->child = new \Doctrine\Common\Collections\ArrayCollection();
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
     * @return Block
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
     * Set description
     *
     * @param string $description
     * @return Block
     */
    public function setDescription($description)
    {
        $this->description = $description;
    
        return $this;
    }

    /**
     * Get description
     *
     * @return string 
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set created
     *
     * @param \DateTime $created
     * @return Block
     */
    public function setCreated($created)
    {
        $this->created = $created;
    
        return $this;
    }

    /**
     * Get created
     *
     * @return \DateTime 
     */
    public function getCreated()
    {
        return $this->created;
    }

    /**
     * Set updated
     *
     * @param \DateTime $updated
     * @return Block
     */
    public function setUpdated($updated)
    {
        $this->updated = $updated;
    
        return $this;
    }

    /**
     * Get updated
     *
     * @return \DateTime 
     */
    public function getUpdated()
    {
        return $this->updated;
    }

    /**
     * Add parent
     *
     * @param \CMS\SharedBundle\Entity\BlockInstance $parent
     * @return Block
     */
    public function addParent(\CMS\SharedBundle\Entity\BlockInstance $parent)
    {
        $this->parent[] = $parent;
    
        return $this;
    }

    /**
     * Remove parent
     *
     * @param \CMS\SharedBundle\Entity\BlockInstance $parent
     */
    public function removeParent(\CMS\SharedBundle\Entity\BlockInstance $parent)
    {
        $this->parent->removeElement($parent);
    }

    /**
     * Get parent
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * Add child
     *
     * @param \CMS\SharedBundle\Entity\BlockInstance $child
     * @return Block
     */
    public function addChild(\CMS\SharedBundle\Entity\BlockInstance $child)
    {
        $this->child[] = $child;
    
        return $this;
    }

    /**
     * Remove child
     *
     * @param \CMS\SharedBundle\Entity\BlockInstance $child
     */
    public function removeChild(\CMS\SharedBundle\Entity\BlockInstance $child)
    {
        $this->child->removeElement($child);
    }

    /**
     * Get child
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getChild()
    {
        return $this->child;
    }

    /**
     * Set type
     *
     * @param \CMS\SharedBundle\Entity\BlockType $type
     * @return Block
     */
    public function setType(\CMS\SharedBundle\Entity\BlockType $type = null)
    {
        $this->type = $type;
    
        return $this;
    }

    /**
     * Get type
     *
     * @return \CMS\SharedBundle\Entity\BlockType 
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set currentRevision
     *
     * @param \CMS\SharedBundle\Entity\BlockRevision $currentRevision
     * @return Block
     */
    public function setCurrentRevision(\CMS\SharedBundle\Entity\BlockRevision $currentRevision = null)
    {
        $this->currentRevision = $currentRevision;
    
        return $this;
    }

    /**
     * Get currentRevision
     *
     * @return \CMS\SharedBundle\Entity\BlockRevision 
     */
    public function getCurrentRevision()
    {
        return $this->currentRevision;
    }
}