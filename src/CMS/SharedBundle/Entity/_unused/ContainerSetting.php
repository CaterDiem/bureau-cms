<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ContainerSetting
 */
class ContainerSetting
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
     * @return ContainerSetting
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
     * @var string
     */
    private $manyToMany;

    /**
     * @var string
     */
    private $oneToMany;


    /**
     * Set manyToMany
     *
     * @param string $manyToMany
     * @return ContainerSetting
     */
    public function setManyToMany($manyToMany)
    {
        $this->manyToMany = $manyToMany;
    
        return $this;
    }

    /**
     * Get manyToMany
     *
     * @return string 
     */
    public function getManyToMany()
    {
        return $this->manyToMany;
    }

    /**
     * Set oneToMany
     *
     * @param string $oneToMany
     * @return ContainerSetting
     */
    public function setOneToMany($oneToMany)
    {
        $this->oneToMany = $oneToMany;
    
        return $this;
    }

    /**
     * Get oneToMany
     *
     * @return string 
     */
    public function getOneToMany()
    {
        return $this->oneToMany;
    }
    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $value;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $revision;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->value = new \Doctrine\Common\Collections\ArrayCollection();
        $this->revision = new \Doctrine\Common\Collections\ArrayCollection();
    }
    
    /**
     * Add value
     *
     * @param \CMS\SharedBundle\Entity\ContainerSettingValue $value
     * @return ContainerSetting
     */
    public function addValue(\CMS\SharedBundle\Entity\ContainerSettingValue $value)
    {
        $this->value[] = $value;
    
        return $this;
    }

    /**
     * Remove value
     *
     * @param \CMS\SharedBundle\Entity\ContainerSettingValue $value
     */
    public function removeValue(\CMS\SharedBundle\Entity\ContainerSettingValue $value)
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
     * Add revision
     *
     * @param \CMS\SharedBundle\Entity\ContainerRevision $revision
     * @return ContainerSetting
     */
    public function addRevision(\CMS\SharedBundle\Entity\ContainerRevision $revision)
    {
        $this->revision[] = $revision;
    
        return $this;
    }

    /**
     * Remove revision
     *
     * @param \CMS\SharedBundle\Entity\ContainerRevision $revision
     */
    public function removeRevision(\CMS\SharedBundle\Entity\ContainerRevision $revision)
    {
        $this->revision->removeElement($revision);
    }

    /**
     * Get revision
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getRevision()
    {
        return $this->revision;
    }

    /**
     * Set revision
     *
     * @param \CMS\SharedBundle\Entity\ContainerRevision $revision
     * @return ContainerSetting
     */
    public function setRevision(\CMS\SharedBundle\Entity\ContainerRevision $revision = null)
    {
        $this->revision = $revision;
    
        return $this;
    }
    /**
     * @var \DateTime
     */
    private $created;

    /**
     * @var \DateTime
     */
    private $updated;


    /**
     * Set created
     *
     * @param \DateTime $created
     * @return ContainerSetting
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
     * @return ContainerSetting
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
}