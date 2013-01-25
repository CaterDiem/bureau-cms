<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Template
 */
class Template
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
     * @var string
     */
    private $filepath;

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
    private $blockInstance;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->blockInstance = new \Doctrine\Common\Collections\ArrayCollection();
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
     * Set description
     *
     * @param string $description
     * @return Template
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
     * Set filepath
     *
     * @param string $filepath
     * @return Template
     */
    public function setFilepath($filepath)
    {
        $this->filepath = $filepath;
    
        return $this;
    }

    /**
     * Get filepath
     *
     * @return string 
     */
    public function getFilepath()
    {
        return $this->filepath;
    }

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

    /**
     * Add blockInstance
     *
     * @param \CMS\SharedBundle\Entity\BlockInstance $blockInstance
     * @return Template
     */
    public function addBlockInstance(\CMS\SharedBundle\Entity\BlockInstance $blockInstance)
    {
        $this->blockInstance[] = $blockInstance;
    
        return $this;
    }

    /**
     * Remove blockInstance
     *
     * @param \CMS\SharedBundle\Entity\BlockInstance $blockInstance
     */
    public function removeBlockInstance(\CMS\SharedBundle\Entity\BlockInstance $blockInstance)
    {
        $this->blockInstance->removeElement($blockInstance);
    }

    /**
     * Get blockInstance
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getBlockInstance()
    {
        return $this->blockInstance;
    }
}
