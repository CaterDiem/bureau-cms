<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CMS\SharedBundle\Entity\ContainerRevision
 */
class ContainerRevision
{
    /**
     * @var integer $id
     */
    private $id;

    /**
     * @var integer $revision
     */
    private $revision;

    /**
     * @var \DateTime $created
     */
    private $created;

    /**
     * @var \DateTime $updated
     */
    private $updated;

    /**
     * @var CMS\SharedBundle\Entity\Container
     */
    private $container;

    /**
     * @var CMS\SharedBundle\Entity\User
     */
    private $editor;


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
     * Set revision
     *
     * @param integer $revision
     * @return ContainerRevision
     */
    public function setRevision($revision)
    {
        $this->revision = $revision;
    
        return $this;
    }

    /**
     * Get revision
     *
     * @return integer 
     */
    public function getRevision()
    {
        return $this->revision;
    }

    /**
     * Set created
     *
     * @param \DateTime $created
     * @return ContainerRevision
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
     * @return ContainerRevision
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
     * Set container
     *
     * @param CMS\SharedBundle\Entity\Container $container
     * @return ContainerRevision
     */
    public function setContainer(\CMS\SharedBundle\Entity\Container $container = null)
    {
        $this->container = $container;
    
        return $this;
    }

    /**
     * Get container
     *
     * @return CMS\SharedBundle\Entity\Container 
     */
    public function getContainer()
    {
        return $this->container;
    }

  

    /**
     * Set editor
     *
     * @param \CMS\SharedBundle\Entity\User $editor
     * @return ContainerRevision
     */
    public function setEditor(\CMS\SharedBundle\Entity\User $editor = null)
    {
        $this->editor = $editor;
    
        return $this;
    }

    /**
     * Get editor
     *
     * @return \CMS\SharedBundle\Entity\User 
     */
    public function getEditor()
    {
        return $this->editor;
    }
}