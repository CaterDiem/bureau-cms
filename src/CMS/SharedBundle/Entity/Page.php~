<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CMS\SharedBundle\Entity\Page
 */
class Page
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
     * @var CMS\SharedBundle\Entity\User
     */
    private $author;

    /**
     * @var CMS\SharedBundle\Entity\PageRevision
     */
    private $currentPageRevision;

    /**
     * @var \Doctrine\Common\Collections\ArrayCollection
     */
    private $pageCategory;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->pageCategory = new \Doctrine\Common\Collections\ArrayCollection();
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
     * Set author
     *
     * @param CMS\SharedBundle\Entity\User $author
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
     * @return CMS\SharedBundle\Entity\User 
     */
    public function getAuthor()
    {
        return $this->author;
    }

    /**
     * Set currentPageRevision
     *
     * @param CMS\SharedBundle\Entity\PageRevision $currentPageRevision
     * @return Page
     */
    public function setCurrentPageRevision(\CMS\SharedBundle\Entity\PageRevision $currentPageRevision = null)
    {
        $this->currentPageRevision = $currentPageRevision;
    
        return $this;
    }

    /**
     * Get currentPageRevision
     *
     * @return CMS\SharedBundle\Entity\PageRevision 
     */
    public function getCurrentPageRevision()
    {
        return $this->currentPageRevision;
    }

    /**
     * Add pageCategory
     *
     * @param CMS\SharedBundle\Entity\PageCategory $pageCategory
     * @return Page
     */
    public function addPageCategory(\CMS\SharedBundle\Entity\PageCategory $pageCategory)
    {
        $this->pageCategory[] = $pageCategory;
    
        return $this;
    }

    /**
     * Remove pageCategory
     *
     * @param CMS\SharedBundle\Entity\PageCategory $pageCategory
     */
    public function removePageCategory(\CMS\SharedBundle\Entity\PageCategory $pageCategory)
    {
        $this->pageCategory->removeElement($pageCategory);
    }

    /**
     * Get pageCategory
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getPageCategory()
    {
        return $this->pageCategory;
    }
    
    
    public function _construct(){
        $this->containers = new ArrayCollection();
    }
    
   
    /**
     * @var string
     */
    private $slug;


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
}