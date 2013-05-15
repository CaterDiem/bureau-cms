<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Layout
 */
class Layout
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
     * @var \CMS\SharedBundle\Entity\Block
     */
    private $rootBlock;


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
     * @return Layout
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
     * @return Layout
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
     * @return Layout
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
     * @return Layout
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
     * Set rootBlock
     *
     * @param \CMS\SharedBundle\Entity\Block $rootBlock
     * @return Layout
     */
    public function setRootBlock(\CMS\SharedBundle\Entity\Block $rootBlock = null)
    {
        $this->rootBlock = $rootBlock;
    
        return $this;
    }

    /**
     * Get rootBlock
     *
     * @return \CMS\SharedBundle\Entity\Block 
     */
    public function getRootBlock()
    {
        return $this->rootBlock;
    }
    /**
     * @var \CMS\SharedBundle\Entity\User
     */
    private $author;


    /**
     * Set author
     *
     * @param \CMS\SharedBundle\Entity\User $author
     * @return Layout
     */
    public function setAuthor(\CMS\SharedBundle\Entity\User $author = null)
    {
        $this->author = $author;
    
        return $this;
    }

    /**
     * Get author
     *
     * @return \CMS\SharedBundle\Entity\User 
     */
    public function getAuthor()
    {
        return $this->author;
    }
    /**
     * @var \CMS\SharedBundle\Entity\User
     */
    private $editor;


    /**
     * Set editor
     *
     * @param \CMS\SharedBundle\Entity\User $editor
     * @return Layout
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