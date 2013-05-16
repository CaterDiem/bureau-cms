<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Block
 */
class Block
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
     * @var \Doctrine\Common\Collections\Collection
     */
    private $instances;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $parents;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $pages;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $settings;

    /**
     * @var \CMS\SharedBundle\Entity\BlockType
     */
    private $type;

    /**
     * @var \CMS\SharedBundle\Entity\Content
     */
    private $content;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->instances = new \Doctrine\Common\Collections\ArrayCollection();
        $this->parents = new \Doctrine\Common\Collections\ArrayCollection();
        $this->pages = new \Doctrine\Common\Collections\ArrayCollection();
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
     * Set name
     *
     * @param string $name
     * @return Block
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
     * @return Block
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
     * @return Block
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
     * @return Block
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
     * Add instances
     *
     * @param \CMS\SharedBundle\Entity\BlockInstance $instances
     * @return Block
     */
    public function addInstance(\CMS\SharedBundle\Entity\BlockInstance $instances)
    {
        $this->instances[] = $instances;
    
        return $this;
    }

    /**
     * Remove instances
     *
     * @param \CMS\SharedBundle\Entity\BlockInstance $instances
     */
    public function removeInstance(\CMS\SharedBundle\Entity\BlockInstance $instances)
    {
        $this->instances->removeElement($instances);
    }

    /**
     * Get instances
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getInstances()
    {
        return $this->instances;
    }

    /**
     * Add parents
     *
     * @param \CMS\SharedBundle\Entity\BlockInstance $parents
     * @return Block
     */
    public function addParent(\CMS\SharedBundle\Entity\BlockInstance $parents)
    {
        $this->parents[] = $parents;
    
        return $this;
    }

    /**
     * Remove parents
     *
     * @param \CMS\SharedBundle\Entity\BlockInstance $parents
     */
    public function removeParent(\CMS\SharedBundle\Entity\BlockInstance $parents)
    {
        $this->parents->removeElement($parents);
    }

    /**
     * Get parents
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getParents()
    {
        return $this->parents;
    }

    /**
     * Add pages
     *
     * @param \CMS\SharedBundle\Entity\PageRevision $pages
     * @return Block
     */
    public function addPage(\CMS\SharedBundle\Entity\PageRevision $pages)
    {
        $this->pages[] = $pages;
    
        return $this;
    }

    /**
     * Remove pages
     *
     * @param \CMS\SharedBundle\Entity\PageRevision $pages
     */
    public function removePage(\CMS\SharedBundle\Entity\PageRevision $pages)
    {
        $this->pages->removeElement($pages);
    }

    /**
     * Get pages
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getPages()
    {
        return $this->pages;
    }

    /**
     * Add settings
     *
     * @param \CMS\SharedBundle\Entity\BlockSetting $settings
     * @return Block
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
     * Set type
     *
     * @param \CMS\SharedBundle\Entity\BlockType $type
     * @return Block
     */
    public function setType(\CMS\SharedBundle\Entity\BlockType $type = null)
    {
        $this->type = $type;
    
        return $this;
    }

    /**
     * Get type
     *
     * @return \CMS\SharedBundle\Entity\BlockType 
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set content
     *
     * @param \CMS\SharedBundle\Entity\Content $content
     * @return Block
     */
    public function setContent(\CMS\SharedBundle\Entity\Content $content = null)
    {
        $this->content = $content;
    
        return $this;
    }

    /**
     * Get content
     *
     * @return \CMS\SharedBundle\Entity\Content 
     */
    public function getContent()
    {
        return $this->content;
    }
    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $layouts;


    /**
     * Add layouts
     *
     * @param \CMS\SharedBundle\Entity\Layout $layouts
     * @return Block
     */
    public function addLayout(\CMS\SharedBundle\Entity\Layout $layouts)
    {
        $this->layouts[] = $layouts;
    
        return $this;
    }

    /**
     * Remove layouts
     *
     * @param \CMS\SharedBundle\Entity\Layout $layouts
     */
    public function removeLayout(\CMS\SharedBundle\Entity\Layout $layouts)
    {
        $this->layouts->removeElement($layouts);
    }

    /**
     * Get layouts
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getLayouts()
    {
        return $this->layouts;
    }
}