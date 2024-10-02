<?php

namespace Ntriga\PimcoreStyle;

use Pimcore\Extension\Bundle\AbstractPimcoreBundle;
use Pimcore\Extension\Bundle\PimcoreBundleAdminClassicInterface;
use Pimcore\Extension\Bundle\Traits\BundleAdminClassicTrait;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class PimcoreNtrigaStyleBundle extends AbstractPimcoreBundle implements PimcoreBundleAdminClassicInterface
{
    use BundleAdminClassicTrait;

    public function build(ContainerBuilder $container)
    {
        parent::build($container);

        $loader = new YamlFileLoader($container, new FileLocator(__DIR__.'/../config'));
        $loader->load('services.yaml');
    }

    public function getPath(): string
    {
        return \dirname(__DIR__);
    }

    public function getEditmodeJsPaths(): array
    {
        return [
            '/bundles/pimcorentrigastyle/js/pimcore/tinyMce-config.js',
            '/bundles/pimcorentrigastyle/js/pimcore/editmode.js',
            '/bundles/pimcorentrigastyle/js/pimcore/dataJane.js',
            '/bundles/pimcorentrigastyle/js/pimcore/introCard.js',
        ];
    }

    public function getJsPaths(): array
    {
        return [
            '/bundles/pimcorentrigastyle/js/pimcore/tinyMce-config.js',
            '/bundles/pimcorentrigastyle/js/pimcore/startup.js',
            '/bundles/pimcorentrigastyle/js/pimcore/dataJane.js',
            '/bundles/pimcorentrigastyle/js/pimcore/introCard.js',
        ];
    }

    public function getCssPaths(): array
    {
        return [
            '/bundles/pimcorentrigastyle/css/pimcore/admin-style.css'
        ];
    }

    public function getEditmodeCssPaths(): array
    {
        return [
            '/bundles/pimcorentrigastyle/css/pimcore/admin-style.css'
        ];
    }

}