# Pimcore Ntriga Style

Style Pimcore for Ntriga

### Dependencies

| Release  | Supported Pimcore Versions | Supported Symfony Versions | Branch  |
|----------|----------------------------|----------------------------|---------|
| **11.x** | `11.0`                     | `6.2`                      | main    |

## Installation

You can install the package via composer:

```bash
composer require ntriga/pimcore-ntriga-style
```

Add Bundle to `bundles.php`:

```php
return [
    Ntriga\PimcoreStyle\PimcoreNtrigaStyleBundle::class => ['all' => true],
];
```

## Changelog
Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Credits
- [All contributors](../../contributors)

## License
GNU General Public License version 3 (GPLv3). Please see [License File](./LICENSE.md) for more information.

