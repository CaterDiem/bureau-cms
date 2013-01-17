<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Page
 */
class Page
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
    private $slug;

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
    private $revisions;

    /**
     * @var \CMS\SharedBundle\Entity\User
     */
    private $author;

    /**
     * @var \CMS\SharedBundle\Entity\PageRevision
     */
    private $currentRevision;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $category;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->revisions = new \Doctrine\Common\Collections\ArrayCollection();
        $this->category = new \Doctrine\Common\Collections\ArrayCollection();
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
     * @return Page
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
     * Set slug
     *
     * @param string $slug
     * @return Page
     */
    public function setSlug($slug)
    {
        $this->slug = $slug;
    
        return $this;
    }

    /**
     * Get slug
     *
     * @return string 
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * Set created
     *
     * @param \DateTime $created
     * @return Page
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
     * @return Page
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
     * Add revisions
     *
     * @param \CMS\SharedBundle\Entity\PageRevision $revisions
     * @return Page
     */
    public function addRevision(\CMS\SharedBundle\Entity\PageRevision $revisions)
    {
        $this->revisions[] = $revisions;
    
        return $this;
    }

    /**
     * Remove revisions
     *
     * @param \CMS\SharedBundle\Entity\PageRevision $revisions
     */
    public function removeRevision(\CMS\SharedBundle\Entity\PageRevision $revisions)
    {
        $this->revisions->removeElement($revisions);
    }

    /**
     * Get revisions
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getRevisions()
    {
        return $this->revisions;
    }

    /**
     * Set author
     *
     * @param \CMS\SharedBundle\Entity\User $author
     * @return Page
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
     * Set currentRevision
     *
     * @param \CMS\SharedBundle\Entity\PageRevision $currentRevision
     * @return Page
     */
    public function setCurrentRevision(\CMS\SharedBundle\Entity\PageRevision $currentRevision = null)
    {
        $this->currentRevision = $currentRevision;
    
        return $this;
    }

    /**
     * Get currentRevision
     *
     * @return \CMS\SharedBundle\Entity\PageRevision 
     */
    public function getCurrentRevision()
    {
        return $this->currentRevision;
    }

    /**
     * Add category
     *
     * @param \CMS\SharedBundle\Entity\PageCategory $category
     * @return Page
     */
    public function addCategory(\CMS\SharedBundle\Entity\PageCategory $category)
    {
        $this->category[] = $category;
    
        return $this;
    }

    /**
     * Remove category
     *
     * @param \CMS\SharedBundle\Entity\PageCategory $category
     */
    public function removeCategory(\CMS\SharedBundle\Entity\PageCategory $category)
    {
        $this->category->removeElement($category);
    }

    /**
     * Get category
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getCategory()
    {
        return $this->category;
    }
}
