<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ContainerSettingValue
 */
class ContainerSettingValue
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var string
     */
    private $value;


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
     * Set value
     *
     * @param string $value
     * @return ContainerSettingValue
     */
    public function setValue($value)
    {
        $this->value = $value;
    
        return $this;
    }

    /**
     * Get value
     *
     * @return string 
     */
    public function getValue()
    {
        return $this->value;
    }
    /**
     * @var string
     */
    private $manyToOne;


    /**
     * Set manyToOne
     *
     * @param string $manyToOne
     * @return ContainerSettingValue
     */
    public function setManyToOne($manyToOne)
    {
        $this->manyToOne = $manyToOne;
    
        return $this;
    }

    /**
     * Get manyToOne
     *
     * @return string 
     */
    public function getManyToOne()
    {
        return $this->manyToOne;
    }
    /**
     * @var \CMS\SharedBundle\Entity\ContainerSetting
     */
    private $setting;


    /**
     * Set setting
     *
     * @param \CMS\SharedBundle\Entity\ContainerSetting $setting
     * @return ContainerSettingValue
     */
    public function setSetting(\CMS\SharedBundle\Entity\ContainerSetting $setting = null)
    {
        $this->setting = $setting;
    
        return $this;
    }

    /**
     * Get setting
     *
     * @return \CMS\SharedBundle\Entity\ContainerSetting 
     */
    public function getSetting()
    {
        return $this->setting;
    }
}