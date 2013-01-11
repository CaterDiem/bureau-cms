<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CMS\SharedBundle\Entity\Container
 */
class Container
{
    /**
     * @var integer $id
     */
    private $id;

    /**
     * @var string $name
     */
    private $name;

    /**
     * @var string $description
     */
    private $description;

    /**
     * @var CMS\SharedBundle\Entity\ContainerType
     */
    private $containerType;


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
     * Set containerType
     *
     * @param CMS\SharedBundle\Entity\ContainerType $containerType
     * @return Container
     */
    public function setContainerType(\CMS\SharedBundle\Entity\ContainerType $containerType = null)
    {
        $this->containerType = $containerType;
    
        return $this;
    }

    /**
     * Get containerType
     *
     * @return CMS\SharedBundle\Entity\ContainerType 
     */
    public function getContainerType()
    {
        return $this->containerType;
    }
    /**
     * @var \CMS\SharedBundle\Entity\ContainerRevision
     */
    private $currentRevision;


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
}