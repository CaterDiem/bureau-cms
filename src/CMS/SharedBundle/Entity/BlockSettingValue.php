<?php

namespace CMS\SharedBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * BlockSettingValue
 */
class BlockSettingValue
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
     * @var \CMS\SharedBundle\Entity\BlockSetting
     */
    private $setting;


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
     * @return BlockSettingValue
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
     * Set setting
     *
     * @param \CMS\SharedBundle\Entity\BlockSetting $setting
     * @return BlockSettingValue
     */
    public function setSetting(\CMS\SharedBundle\Entity\BlockSetting $setting = null)
    {
        $this->setting = $setting;
    
        return $this;
    }

    /**
     * Get setting
     *
     * @return \CMS\SharedBundle\Entity\BlockSetting 
     */
    public function getSetting()
    {
        return $this->setting;
    }
}
