<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Content
 */
class Content
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var string
     */
    private $content;

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
    private $blocks;

    /**
     * @var \CMS\SharedBundle\Entity\User
     */
    private $editor;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->blocks = new \Doctrine\Common\Collections\ArrayCollection();
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
     * Set content
     *
     * @param string $content
     * @return Content
     */
    public function setContent($content)
    {
        $this->content = $content;
    
        return $this;
    }

    /**
     * Get content
     *
     * @return string 
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Set created
     *
     * @param \DateTime $created
     * @return Content
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
     * @return Content
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
     * Add blocks
     *
     * @param \CMS\SharedBundle\Entity\Block $blocks
     * @return Content
     */
    public function addBlock(\CMS\SharedBundle\Entity\Block $blocks)
    {
        $this->blocks[] = $blocks;
    
        return $this;
    }

    /**
     * Remove blocks
     *
     * @param \CMS\SharedBundle\Entity\Block $blocks
     */
    public function removeBlock(\CMS\SharedBundle\Entity\Block $blocks)
    {
        $this->blocks->removeElement($blocks);
    }

    /**
     * Get blocks
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getBlocks()
    {
        return $this->blocks;
    }

    /**
     * Set editor
     *
     * @param \CMS\SharedBundle\Entity\User $editor
     * @return Content
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
