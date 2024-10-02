<?php

namespace Ntriga\PimcoreStyle\Model\Product\AdminStyle;

use Pimcore\Model\Document;
use Pimcore\Model\Element\AdminStyle;
use Pimcore\Model\Element\ElementInterface;

class DocumentEventStyle extends AdminStyle
{
    public function __construct(ElementInterface $element)
    {
        parent::__construct($element);

        if ($element instanceof Document\Page){
            $this->elementIconClass = null;
            $this->elementIcon = '/bundles/pimcoreadmin/img/flat-white-icons/page.svg';
            $this->elementCssClass = 'admin-icon-gray';
        }

        if ($element instanceof Document\Folder){
            $this->elementIconClass = null;
            $this->elementIcon = '/bundles/pimcoreadmin/img/flat-white-icons/opened_folder.svg';
            $this->elementCssClass = 'admin-icon-gray';
        }

        if ($element instanceof Document\Link){
            $this->elementIconClass = null;
            $this->elementIcon = '/bundles/pimcoreadmin/img/flat-white-icons/link.svg';
            $this->elementCssClass = 'admin-icon-gray';
        }

        if ($element instanceof Document\Snippet){
            $this->elementIconClass = null;
            $this->elementIcon = '/bundles/pimcoreadmin/img/flat-white-icons/snippet.svg';
            $this->elementCssClass = 'admin-icon-gray';
        }

        if ($element instanceof Document\Email){
            $this->elementIconClass = null;
            $this->elementIcon = '/bundles/pimcoreadmin/img/flat-white-icons/email.svg';
            $this->elementCssClass = 'admin-icon-gray';
        }
    }
}
