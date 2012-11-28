<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CMS\SharedBundle\Entity\Product
 */
class Product
{
    /**
     * @var integer $id
     */
    private $id;

    /**
     * @var \Doctrine\Common\Collections\ArrayCollection
     */
    private $metadataValue;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->metadataValue = new \Doctrine\Common\Collections\ArrayCollection();
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
     * Add metadataValue
     *
     * @param CMS\SharedBundle\Entity\MetadataValue $metadataValue
     * @return Product
     */
    public function addMetadataValue(\CMS\SharedBundle\Entity\MetadataValue $metadataValue)
    {
        $this->metadataValue[] = $metadataValue;
    
        return $this;
    }

    /**
     * Remove metadataValue
     *
     * @param CMS\SharedBundle\Entity\MetadataValue $metadataValue
     */
    public function removeMetadataValue(\CMS\SharedBundle\Entity\MetadataValue $metadataValue)
    {
        $this->metadataValue->removeElement($metadataValue);
    }

    /**
     * Get metadataValue
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getMetadataValue()
    {
        return $this->metadataValue;
    }
}