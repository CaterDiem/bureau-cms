<?php

namespace CMS\PageBundle\Container;

use Doctrine\ORM\EntityManager;
use CMS\SharedBundle\Entity\Page;
use CMS\SharedBundle\Entity\Container;

/**
 * ContainerManager is used to find, load and modify containers.
 *
 * @author jtemplet
 */
class ContainerManager {

    public function __construct(EntityManager $em) {        
        $this->em = $em;
        $this->container = FALSE;
    }

}

?>
