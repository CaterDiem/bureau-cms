<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * BlockRevision
 */
class BlockRevision
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var integer
     */
    private $revision;

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
    private $setting;

    /**
     * @var \CMS\SharedBundle\Entity\Block
     */
    private $block;

    /**
     * @var \CMS\SharedBundle\Entity\User
     */
    private $editor;

    /**
     * @var \CMS\SharedBundle\Entity\Template
     */
    private $template;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->setting = new \Doctrine\Common\Collections\ArrayCollection();
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
     * Set revision
     *
     * @param integer $revision
     * @return BlockRevision
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
     * Set content
     *
     * @param string $content
     * @return BlockRevision
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
     * @return BlockRevision
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
     * @return BlockRevision
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
     * Add setting
     *
     * @param \CMS\SharedBundle\Entity\BlockSetting $setting
     * @return BlockRevision
     */
    public function addSetting(\CMS\SharedBundle\Entity\BlockSetting $setting)
    {
        $this->setting[] = $setting;
    
        return $this;
    }

    /**
     * Remove setting
     *
     * @param \CMS\SharedBundle\Entity\BlockSetting $setting
     */
    public function removeSetting(\CMS\SharedBundle\Entity\BlockSetting $setting)
    {
        $this->setting->removeElement($setting);
    }

    /**
     * Get setting
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getSetting()
    {
        return $this->setting;
    }

    /**
     * Set block
     *
     * @param \CMS\SharedBundle\Entity\Block $block
     * @return BlockRevision
     */
    public function setBlock(\CMS\SharedBundle\Entity\Block $block = null)
    {
        $this->block = $block;
    
        return $this;
    }

    /**
     * Get block
     *
     * @return \CMS\SharedBundle\Entity\Block 
     */
    public function getBlock()
    {
        return $this->block;
    }

    /**
     * Set editor
     *
     * @param \CMS\SharedBundle\Entity\User $editor
     * @return BlockRevision
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

    /**
     * Set template
     *
     * @param \CMS\SharedBundle\Entity\Template $template
     * @return BlockRevision
     */
    public function setTemplate(\CMS\SharedBundle\Entity\Template $template = null)
    {
        $this->template = $template;
    
        return $this;
    }

    /**
     * Get template
     *
     * @return \CMS\SharedBundle\Entity\Template 
     */
    public function getTemplate()
    {
        return $this->template;
    }
}