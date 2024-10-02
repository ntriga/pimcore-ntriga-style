<?php

namespace Ntriga\PimcoreStyle\Model\Product\AdminStyle;

use App\Model\DataObject\Customer;
use Pimcore\Model\DataObject\AlertBanner;
use Pimcore\Model\DataObject\Blog;
use Pimcore\Model\DataObject\Bundel;
use Pimcore\Model\DataObject\Category;
use Pimcore\Model\DataObject\Color;
use Pimcore\Model\DataObject\Contactinfo;
use Pimcore\Model\DataObject\CTA;
use Pimcore\Model\DataObject\Brochure;
use Pimcore\Model\DataObject\Folder;
use Pimcore\Model\DataObject\Merk;
use Pimcore\Model\DataObject\OnlineShopOrder;
use Pimcore\Model\DataObject\Product;
use Pimcore\Model\DataObject\SubColor;
use Pimcore\Model\Element\AdminStyle;
use Pimcore\Model\Element\ElementInterface;

class ObjectEventStyle extends AdminStyle
{
    public function __construct(ElementInterface $element)
    {
        parent::__construct($element);

        if ($element instanceof Folder){
            $this->elementIconClass = null;
            $this->elementIcon = '/bundles/pimcoreadmin/img/flat-white-icons/opened_folder.svg';
            $this->elementCssClass = 'admin-icon-gray';
        }

        if (class_exists('Pimcore\Model\DataObject\Product')){
            if ($element instanceof Product){
                $this->elementIconClass = null;
                $this->elementIcon = '/bundles/pimcoreadmin/img/flat-white-icons/object.svg';
                $this->elementCssClass = 'admin-icon-gray';
            }
        }

        if (class_exists('Pimcore\Model\DataObject\Customer')){
            if ($element instanceof Customer){
                $this->elementIconClass = null;
                $this->elementIcon = '/bundles/pimcoreadmin/img/flat-white-icons/person.svg';
                $this->elementCssClass = 'admin-icon-gray';
            }
        }

        if (class_exists('Pimcore\Model\DataObject\AlertBanner')){
            if ($element instanceof AlertBanner){
                $this->elementIconClass = null;
                $this->elementIcon = '/bundles/pimcoreadmin/img/flat-white-icons/high_priority.svg';
                $this->elementCssClass = 'admin-icon-gray';
            }
        }

        if (class_exists('Pimcore\Model\DataObject\Category')){
            if ($element instanceof Category){
                $this->elementIconClass = null;
                $this->elementIcon = '/bundles/pimcoreadmin/img/flat-white-icons/genealogy.svg';
                $this->elementCssClass = 'admin-icon-gray';
            }
        }

        if (class_exists('Pimcore\Model\DataObject\Merk')){
            if ($element instanceof Merk){
                $this->elementIconClass = null;
                $this->elementIcon = '/bundles/pimcoreadmin/img/flat-white-icons/label.svg';
                $this->elementCssClass = 'admin-icon-gray';
            }
        }

        if (class_exists('Pimcore\Model\DataObject\Blog')){
            if ($element instanceof Blog){
                $this->elementIconClass = null;
                $this->elementIcon = '/bundles/pimcoreadmin/img/flat-white-icons/news.svg';
                $this->elementCssClass = 'admin-icon-gray';
            }
        }

        if (class_exists('Pimcore\Model\DataObject\OnlineShopOrder')){
            if ($element instanceof OnlineShopOrder){
                $this->elementIconClass = null;
                $this->elementIcon = '/bundles/pimcoreadmin/img/flat-white-icons/deployment.svg';
                $this->elementCssClass = 'admin-icon-gray';
            }
        }

        if (class_exists('Pimcore\Model\DataObject\Contactinfo')){
            if ($element instanceof Contactinfo){
                $this->elementIconClass = null;
                $this->elementIcon = '/bundles/pimcoreadmin/img/flat-white-icons/organization.svg';
                $this->elementCssClass = 'admin-icon-gray';
            }
        }

        if (class_exists('Pimcore\Model\DataObject\Color')){
            if ($element instanceof Color){
                $this->elementIconClass = null;
                $this->elementIcon = '/bundles/customadmin/img/icons/waterdrop.svg';
                $this->elementCssClass = 'admin-icon-gray';
            }
        }

        if (class_exists('Pimcore\Model\DataObject\SubColor')){
            if ($element instanceof SubColor){
                $this->elementIconClass = null;
                $this->elementIcon = '/bundles/customadmin/img/icons/waterdrop.svg';
                $this->elementCssClass = 'admin-icon-gray';
            }
        }

        if (class_exists('Pimcore\Model\DataObject\CTA')){
            if ($element instanceof CTA){
                $this->elementIconClass = null;
                $this->elementIcon = '/bundles/pimcoreadmin/img/flat-white-icons/advertising.svg';
                $this->elementCssClass = 'admin-icon-gray';
            }
        }

        if (class_exists('Pimcore\Model\DataObject\Bundel')){
            if ($element instanceof Bundel){
                $this->elementIconClass = null;
                $this->elementIcon = '/bundles/pimcoreadmin/img/flat-white-icons/book.svg';
                $this->elementCssClass = 'admin-icon-gray';
            }
        }
    }
}
