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
}