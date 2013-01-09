<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CMS\SharedBundle\Entity\PageCategory
 */
class PageCategory
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
     * @var \Doctrine\Common\Collections\ArrayCollection
     */
    private $page;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->page = new \Doctrine\Common\Collections\ArrayCollection();
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
     * @return PageCategory
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
     * Add page
     *
     * @param CMS\SharedBundle\Entity\Page $page
     * @return PageCategory
     */
    public function addPage(\CMS\SharedBundle\Entity\Page $page)
    {
        $this->page[] = $page;
    
        return $this;
    }

    /**
     * Remove page
     *
     * @param CMS\SharedBundle\Entity\Page $page
     */
    public function removePage(\CMS\SharedBundle\Entity\Page $page)
    {
        $this->page->removeElement($page);
    }

    /**
     * Get page
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getPage()
    {
        return $this->page;
    }
}