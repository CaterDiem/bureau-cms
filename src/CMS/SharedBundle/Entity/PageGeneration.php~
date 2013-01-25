<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * PageGeneration
 */
class PageGeneration
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var \DateTime
     */
    private $timeGenerated;

    /**
     * @var \CMS\SharedBundle\Entity\PageRevision
     */
    private $pageRevision;


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
     * Set timeGenerated
     *
     * @param \DateTime $timeGenerated
     * @return PageGeneration
     */
    public function setTimeGenerated($timeGenerated)
    {
        $this->timeGenerated = $timeGenerated;
    
        return $this;
    }

    /**
     * Get timeGenerated
     *
     * @return \DateTime 
     */
    public function getTimeGenerated()
    {
        return $this->timeGenerated;
    }

    /**
     * Set pageRevision
     *
     * @param \CMS\SharedBundle\Entity\PageRevision $pageRevision
     * @return PageGeneration
     */
    public function setPageRevision(\CMS\SharedBundle\Entity\PageRevision $pageRevision = null)
    {
        $this->pageRevision = $pageRevision;
    
        return $this;
    }

    /**
     * Get pageRevision
     *
     * @return \CMS\SharedBundle\Entity\PageRevision 
     */
    public function getPageRevision()
    {
        return $this->pageRevision;
    }
}
