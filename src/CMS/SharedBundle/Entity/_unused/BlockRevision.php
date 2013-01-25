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
     * @var \CMS\SharedBundle\Entity\Block
     */
    private $currentBlock;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $settings;

    /**
     * @var \CMS\SharedBundle\Entity\User
     */
    private $editor;

    /**
     * @var \CMS\SharedBundle\Entity\Block
     */
    private $block;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->settings = new \Doctrine\Common\Collections\ArrayCollection();
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
     * Set currentBlock
     *
     * @param \CMS\SharedBundle\Entity\Block $currentBlock
     * @return BlockRevision
     */
    public function setCurrentBlock(\CMS\SharedBundle\Entity\Block $currentBlock = null)
    {
        $this->currentBlock = $currentBlock;
    
        return $this;
    }

    /**
     * Get currentBlock
     *
     * @return \CMS\SharedBundle\Entity\Block 
     */
    public function getCurrentBlock()
    {
        return $this->currentBlock;
    }

    /**
     * Add settings
     *
     * @param \CMS\SharedBundle\Entity\BlockSetting $settings
     * @return BlockRevision
     */
    public function addSetting(\CMS\SharedBundle\Entity\BlockSetting $settings)
    {
        $this->settings[] = $settings;
    
        return $this;
    }

    /**
     * Remove settings
     *
     * @param \CMS\SharedBundle\Entity\BlockSetting $settings
     */
    public function removeSetting(\CMS\SharedBundle\Entity\BlockSetting $settings)
    {
        $this->settings->removeElement($settings);
    }

    /**
     * Get settings
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getSettings()
    {
        return $this->settings;
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
}