<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Container
 */
class Container
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
     * @var \CMS\SharedBundle\Entity\ContainerType
     */
    private $type;

    /**
     * @var \CMS\SharedBundle\Entity\ContainerRevision
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
     * @return Container
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
     * @return Container
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
     * @return Container
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
     * @return Container
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
     * @param \CMS\SharedBundle\Entity\ContainerChild $parent
     * @return Container
     */
    public function addParent(\CMS\SharedBundle\Entity\ContainerChild $parent)
    {
        $this->parent[] = $parent;
    
        return $this;
    }

    /**
     * Remove parent
     *
     * @param \CMS\SharedBundle\Entity\ContainerChild $parent
     */
    public function removeParent(\CMS\SharedBundle\Entity\ContainerChild $parent)
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
     * @param \CMS\SharedBundle\Entity\ContainerChild $child
     * @return Container
     */
    public function addChild(\CMS\SharedBundle\Entity\ContainerChild $child)
    {
        $this->child[] = $child;
    
        return $this;
    }

    /**
     * Remove child
     *
     * @param \CMS\SharedBundle\Entity\ContainerChild $child
     */
    public function removeChild(\CMS\SharedBundle\Entity\ContainerChild $child)
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
     * @param \CMS\SharedBundle\Entity\ContainerType $type
     * @return Container
     */
    public function setType(\CMS\SharedBundle\Entity\ContainerType $type = null)
    {
        $this->type = $type;
    
        return $this;
    }

    /**
     * Get type
     *
     * @return \CMS\SharedBundle\Entity\ContainerType 
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set currentRevision
     *
     * @param \CMS\SharedBundle\Entity\ContainerRevision $currentRevision
     * @return Container
     */
    public function setCurrentRevision(\CMS\SharedBundle\Entity\ContainerRevision $currentRevision = null)
    {
        $this->currentRevision = $currentRevision;
    
        return $this;
    }

    /**
     * Get currentRevision
     *
     * @return \CMS\SharedBundle\Entity\ContainerRevision 
     */
    public function getCurrentRevision()
    {
        return $this->currentRevision;
    }
}