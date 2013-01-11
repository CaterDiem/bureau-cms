<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CMS\SharedBundle\Entity\Template
 */
class Template
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
     * @var CMS\SharedBundle\Entity\Container
     */
    private $rootContainer;


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
     * @return Template
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
     * Set rootContainer
     *
     * @param CMS\SharedBundle\Entity\Container $rootContainer
     * @return Template
     */
    public function setRootContainer(\CMS\SharedBundle\Entity\Container $rootContainer = null)
    {
        $this->rootContainer = $rootContainer;
    
        return $this;
    }

    /**
     * Get rootContainer
     *
     * @return CMS\SharedBundle\Entity\Container 
     */
    public function getRootContainer()
    {
        return $this->rootContainer;
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
     * @return Template
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
     * @return Template
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