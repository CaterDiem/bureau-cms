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
}