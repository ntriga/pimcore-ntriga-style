<?php

namespace Ntriga\PimcoreStyle\EventListener;

use Ntriga\PimcoreStyle\Model\Product\AdminStyle\AssetEventStyle;
use Ntriga\PimcoreStyle\Model\Product\AdminStyle\DocumentEventStyle;
use Ntriga\PimcoreStyle\Model\Product\AdminStyle\ObjectEventStyle;
use Pimcore\Model\Asset;
use Pimcore\Model\DataObject;
use Pimcore\Model\Document;

class AdminStyleListener
{
    public function onResolveElementAdminStyle(\Pimcore\Bundle\AdminBundle\Event\ElementAdminStyleEvent $event): void
    {
        $element = $event->getElement();
        // decide which default styles you want to override
        if ($element instanceof Asset) {
            $event->setAdminStyle(new AssetEventStyle($element));
        }
        if ($element instanceof Document){
            $event->setAdminStyle(new DocumentEventStyle($element));
        }

        if ($element instanceof DataObject){
            $event->setAdminStyle(new ObjectEventStyle($element));
        }
    }
}
