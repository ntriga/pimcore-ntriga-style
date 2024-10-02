<?php

namespace Ntriga\PimcoreStyle\Model\Product\AdminStyle;

use Pimcore\Model\Asset\Folder;
use Pimcore\Model\Asset\Image;
use Pimcore\Model\Asset\Video;
use Pimcore\Model\Element\AdminStyle;
use Pimcore\Model\Element\ElementInterface;

class AssetEventStyle extends AdminStyle
{
    public function __construct(ElementInterface $element)
    {
        parent::__construct($element);

        if ($element instanceof Image){
            $this->elementIconClass = null;
            $this->elementIcon = '/bundles/pimcoreadmin/img/flat-white-icons/asset.svg';
            $this->elementCssClass = 'admin-icon-gray';
        }

        if ($element instanceof Folder){
            $this->elementIconClass = null;
            $this->elementIcon = '/bundles/pimcoreadmin/img/flat-white-icons/opened_folder.svg';
            $this->elementCssClass = 'admin-icon-gray';
        }

        if ($element instanceof Video){
            $this->elementIconClass = null;
            $this->elementIcon = '/bundles/pimcoreadmin/img/flat-white-icons/video_file.svg';
            $this->elementCssClass = 'admin-icon-gray';
        }
    }
}
