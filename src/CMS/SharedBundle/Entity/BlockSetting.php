<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * BlockSetting
 */
class BlockSetting
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
    private $value;

    /**
     * @var \CMS\SharedBundle\Entity\BlockRevision
     */
    private $revision;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->value = new \Doctrine\Common\Collections\ArrayCollection();
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
     * @return BlockSetting
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
     * Set created
     *
     * @param \DateTime $created
     * @return BlockSetting
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
     * @return BlockSetting
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
     * Add value
     *
     * @param \CMS\SharedBundle\Entity\BlockSettingValue $value
     * @return BlockSetting
     */
    public function addValue(\CMS\SharedBundle\Entity\BlockSettingValue $value)
    {
        $this->value[] = $value;
    
        return $this;
    }

    /**
     * Remove value
     *
     * @param \CMS\SharedBundle\Entity\BlockSettingValue $value
     */
    public function removeValue(\CMS\SharedBundle\Entity\BlockSettingValue $value)
    {
        $this->value->removeElement($value);
    }

    /**
     * Get value
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * Set revision
     *
     * @param \CMS\SharedBundle\Entity\BlockRevision $revision
     * @return BlockSetting
     */
    public function setRevision(\CMS\SharedBundle\Entity\BlockRevision $revision = null)
    {
        $this->revision = $revision;
    
        return $this;
    }

    /**
     * Get revision
     *
     * @return \CMS\SharedBundle\Entity\BlockRevision 
     */
    public function getRevision()
    {
        return $this->revision;
    }
}
