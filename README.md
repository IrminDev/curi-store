<p align="center">
  <img src="curistore-frontend/src/assets/logo.png" width="100" />
</p>
<p align="center">
    <h1 align="center">CURI-STORE</h1>
</p>
<p align="center">
    <em>This project is only for academic issues`</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/IrminDev/curi-store?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/IrminDev/curi-store?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/IrminDev/curi-store?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/IrminDev/curi-store?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/EditorConfig-FEFEFE.svg?style=flat&logo=EditorConfig&logoColor=black" alt="EditorConfig">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PHP-777BB4.svg?style=flat&logo=PHP&logoColor=white" alt="PHP">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running curi-store](#-running-curi-store)
>   - [🧪 Environment variables](#-env)
> - [🛠 Project Roadmap](#-project-roadmap)
> - [🤝 Contributing](#-contributing)

---

## 📦 Features

In this project these are the highlitghted features:
- API authorization required
- Authorization using JWT
- Backend using laravel and frontend using react
- JWT sessions
- PDF viewer
- Charts for stats
- Login and sign up modules

---

## 📂 Repository Structure

```sh
└── curi-store/
    ├── LICENSE
    ├── README.md
    ├── curistore-backend
    │   ├── .editorconfig
    │   ├── .env.example
    │   ├── .gitattributes
    │   ├── .gitignore
    │   ├── README.md
    │   ├── app
    │   │   ├── Http
    │   │   │   └── Controllers
    │   │   │       ├── Api
    │   │   │       └── Controller.php
    │   │   ├── Models
    │   │   │   ├── Address.php
    │   │   │   ├── Brand.php
    │   │   │   ├── Category.php
    │   │   │   ├── Order.php
    │   │   │   ├── Product.php
    │   │   │   ├── Purchase.php
    │   │   │   ├── Thumbnail.php
    │   │   │   ├── User.php
    │   │   │   └── Wallet.php
    │   │   └── Providers
    │   │       └── AppServiceProvider.php
    │   ├── artisan
    │   ├── bootstrap
    │   │   ├── app.php
    │   │   ├── cache
    │   │   │   └── .gitignore
    │   │   └── providers.php
    │   ├── composer.json
    │   ├── composer.lock
    │   ├── config
    │   │   ├── app.php
    │   │   ├── auth.php
    │   │   ├── cache.php
    │   │   ├── database.php
    │   │   ├── filesystems.php
    │   │   ├── logging.php
    │   │   ├── mail.php
    │   │   ├── queue.php
    │   │   ├── sanctum.php
    │   │   ├── services.php
    │   │   └── session.php
    │   ├── database
    │   │   ├── .gitignore
    │   │   ├── factories
    │   │   │   └── UserFactory.php
    │   │   ├── migrations
    │   │   │   ├── 0001_01_01_000000_create_users_table.php
    │   │   │   ├── 0001_01_01_000001_create_cache_table.php
    │   │   │   ├── 0001_01_01_000002_create_jobs_table.php
    │   │   │   ├── 2024_04_22_010615_create_brands_table.php
    │   │   │   ├── 2024_04_22_010623_create_categories_table.php
    │   │   │   ├── 2024_04_22_010702_create_products_table.php
    │   │   │   ├── 2024_04_22_010930_create_addresses_table.php
    │   │   │   ├── 2024_04_22_010943_create_wallets_table.php
    │   │   │   ├── 2024_04_22_010955_create_purchases_table.php
    │   │   │   ├── 2024_04_22_011001_create_orders_table.php
    │   │   │   ├── 2024_04_22_011308_create_thumbnails_table.php
    │   │   │   └── 2024_04_22_172059_create_personal_access_tokens_table.php
    │   │   └── seeders
    │   │       └── DatabaseSeeder.php
    │   ├── package.json
    │   ├── phpunit.xml
    │   ├── public
    │   │   ├── .htaccess
    │   │   ├── favicon.ico
    │   │   ├── index.php
    │   │   └── robots.txt
    │   ├── resources
    │   │   ├── css
    │   │   │   └── app.css
    │   │   ├── js
    │   │   │   ├── app.js
    │   │   │   └── bootstrap.js
    │   │   └── views
    │   │       └── welcome.blade.php
    │   ├── routes
    │   │   ├── api.php
    │   │   ├── console.php
    │   │   └── web.php
    │   ├── storage
    │   │   ├── app
    │   │   │   ├── .gitignore
    │   │   │   └── public
    │   │   │       └── .gitignore
    │   │   ├── framework
    │   │   │   ├── .gitignore
    │   │   │   ├── cache
    │   │   │   │   ├── .gitignore
    │   │   │   │   └── data
    │   │   │   ├── sessions
    │   │   │   │   └── .gitignore
    │   │   │   ├── testing
    │   │   │   │   └── .gitignore
    │   │   │   └── views
    │   │   │       └── .gitignore
    │   │   └── logs
    │   │       └── .gitignore
    │   ├── tests
    │   │   ├── Feature
    │   │   │   └── ExampleTest.php
    │   │   ├── TestCase.php
    │   │   └── Unit
    │   │       └── ExampleTest.php
    │   └── vite.config.js
    ├── curistore-frontend
    │   ├── .gitignore
    │   ├── README.md
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── public
    │   │   ├── favicon.ico
    │   │   ├── index.html
    │   │   ├── logo192.png
    │   │   ├── logo512.png
    │   │   ├── manifest.json
    │   │   └── robots.txt
    │   └── src
    │       ├── App.js
    │       └── index.js
    └── products.json
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                                                                              | Summary                                   |
| ---                                                                               | ---                                       |
| [products.json](https://github.com/IrminDev/curi-store/blob/master/products.json) | HTTP error 401 for prompt `products.json` |

</details>

<details closed><summary>curistore-frontend</summary>

| File                                                                                                         | Summary                                                          |
| ---                                                                                                          | ---                                                              |
| [package.json](https://github.com/IrminDev/curi-store/blob/master/curistore-frontend/package.json)           | HTTP error 401 for prompt `curistore-frontend/package.json`      |
| [package-lock.json](https://github.com/IrminDev/curi-store/blob/master/curistore-frontend/package-lock.json) | HTTP error 401 for prompt `curistore-frontend/package-lock.json` |

</details>

<details closed><summary>curistore-frontend.public</summary>

| File                                                                                                        | Summary                                                             |
| ---                                                                                                         | ---                                                                 |
| [index.html](https://github.com/IrminDev/curi-store/blob/master/curistore-frontend/public/index.html)       | HTTP error 401 for prompt `curistore-frontend/public/index.html`    |
| [manifest.json](https://github.com/IrminDev/curi-store/blob/master/curistore-frontend/public/manifest.json) | HTTP error 401 for prompt `curistore-frontend/public/manifest.json` |
| [robots.txt](https://github.com/IrminDev/curi-store/blob/master/curistore-frontend/public/robots.txt)       | HTTP error 401 for prompt `curistore-frontend/public/robots.txt`    |

</details>

<details closed><summary>curistore-frontend.src</summary>

| File                                                                                           | Summary                                                     |
| ---                                                                                            | ---                                                         |
| [App.js](https://github.com/IrminDev/curi-store/blob/master/curistore-frontend/src/App.js)     | HTTP error 401 for prompt `curistore-frontend/src/App.js`   |
| [index.js](https://github.com/IrminDev/curi-store/blob/master/curistore-frontend/src/index.js) | HTTP error 401 for prompt `curistore-frontend/src/index.js` |

</details>

<details closed><summary>curistore-backend</summary>

| File                                                                                                  | Summary                                                      |
| ---                                                                                                   | ---                                                          |
| [composer.lock](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/composer.lock)   | HTTP error 401 for prompt `curistore-backend/composer.lock`  |
| [.editorconfig](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/.editorconfig)   | HTTP error 401 for prompt `curistore-backend/.editorconfig`  |
| [vite.config.js](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/vite.config.js) | HTTP error 401 for prompt `curistore-backend/vite.config.js` |
| [package.json](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/package.json)     | HTTP error 401 for prompt `curistore-backend/package.json`   |
| [phpunit.xml](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/phpunit.xml)       | HTTP error 401 for prompt `curistore-backend/phpunit.xml`    |
| [.env.example](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/.env.example)     | HTTP error 401 for prompt `curistore-backend/.env.example`   |
| [artisan](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/artisan)               | HTTP error 401 for prompt `curistore-backend/artisan`        |
| [composer.json](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/composer.json)   | HTTP error 401 for prompt `curistore-backend/composer.json`  |

</details>

<details closed><summary>curistore-backend.resources.css</summary>

| File                                                                                                  | Summary                                                             |
| ---                                                                                                   | ---                                                                 |
| [app.css](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/resources/css/app.css) | HTTP error 401 for prompt `curistore-backend/resources/css/app.css` |

</details>

<details closed><summary>curistore-backend.resources.views</summary>

| File                                                                                                                        | Summary                                                                         |
| ---                                                                                                                         | ---                                                                             |
| [welcome.blade.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/resources/views/welcome.blade.php) | HTTP error 401 for prompt `curistore-backend/resources/views/welcome.blade.php` |

</details>

<details closed><summary>curistore-backend.resources.js</summary>

| File                                                                                                           | Summary                                                                 |
| ---                                                                                                            | ---                                                                     |
| [bootstrap.js](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/resources/js/bootstrap.js) | HTTP error 401 for prompt `curistore-backend/resources/js/bootstrap.js` |
| [app.js](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/resources/js/app.js)             | HTTP error 401 for prompt `curistore-backend/resources/js/app.js`       |

</details>

<details closed><summary>curistore-backend.public</summary>

| File                                                                                                 | Summary                                                         |
| ---                                                                                                  | ---                                                             |
| [.htaccess](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/public/.htaccess)   | HTTP error 401 for prompt `curistore-backend/public/.htaccess`  |
| [index.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/public/index.php)   | HTTP error 401 for prompt `curistore-backend/public/index.php`  |
| [robots.txt](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/public/robots.txt) | HTTP error 401 for prompt `curistore-backend/public/robots.txt` |

</details>

<details closed><summary>curistore-backend.database.factories</summary>

| File                                                                                                                       | Summary                                                                          |
| ---                                                                                                                        | ---                                                                              |
| [UserFactory.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/database/factories/UserFactory.php) | HTTP error 401 for prompt `curistore-backend/database/factories/UserFactory.php` |

</details>

<details closed><summary>curistore-backend.database.migrations</summary>

| File                                                                                                                                                                                                            | Summary                                                                                                                     |
| ---                                                                                                                                                                                                             | ---                                                                                                                         |
| [2024_04_22_010943_create_wallets_table.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/database/migrations/2024_04_22_010943_create_wallets_table.php)                               | HTTP error 401 for prompt `curistore-backend/database/migrations/2024_04_22_010943_create_wallets_table.php`                |
| [2024_04_22_011308_create_thumbnails_table.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/database/migrations/2024_04_22_011308_create_thumbnails_table.php)                         | HTTP error 401 for prompt `curistore-backend/database/migrations/2024_04_22_011308_create_thumbnails_table.php`             |
| [2024_04_22_010623_create_categories_table.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/database/migrations/2024_04_22_010623_create_categories_table.php)                         | HTTP error 401 for prompt `curistore-backend/database/migrations/2024_04_22_010623_create_categories_table.php`             |
| [2024_04_22_010955_create_purchases_table.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/database/migrations/2024_04_22_010955_create_purchases_table.php)                           | HTTP error 401 for prompt `curistore-backend/database/migrations/2024_04_22_010955_create_purchases_table.php`              |
| [2024_04_22_011001_create_orders_table.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/database/migrations/2024_04_22_011001_create_orders_table.php)                                 | HTTP error 401 for prompt `curistore-backend/database/migrations/2024_04_22_011001_create_orders_table.php`                 |
| [2024_04_22_010930_create_addresses_table.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/database/migrations/2024_04_22_010930_create_addresses_table.php)                           | HTTP error 401 for prompt `curistore-backend/database/migrations/2024_04_22_010930_create_addresses_table.php`              |
| [0001_01_01_000002_create_jobs_table.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/database/migrations/0001_01_01_000002_create_jobs_table.php)                                     | HTTP error 401 for prompt `curistore-backend/database/migrations/0001_01_01_000002_create_jobs_table.php`                   |
| [2024_04_22_010615_create_brands_table.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/database/migrations/2024_04_22_010615_create_brands_table.php)                                 | HTTP error 401 for prompt `curistore-backend/database/migrations/2024_04_22_010615_create_brands_table.php`                 |
| [0001_01_01_000000_create_users_table.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/database/migrations/0001_01_01_000000_create_users_table.php)                                   | HTTP error 401 for prompt `curistore-backend/database/migrations/0001_01_01_000000_create_users_table.php`                  |
| [0001_01_01_000001_create_cache_table.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/database/migrations/0001_01_01_000001_create_cache_table.php)                                   | HTTP error 401 for prompt `curistore-backend/database/migrations/0001_01_01_000001_create_cache_table.php`                  |
| [2024_04_22_010702_create_products_table.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/database/migrations/2024_04_22_010702_create_products_table.php)                             | HTTP error 401 for prompt `curistore-backend/database/migrations/2024_04_22_010702_create_products_table.php`               |
| [2024_04_22_172059_create_personal_access_tokens_table.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/database/migrations/2024_04_22_172059_create_personal_access_tokens_table.php) | HTTP error 401 for prompt `curistore-backend/database/migrations/2024_04_22_172059_create_personal_access_tokens_table.php` |

</details>

<details closed><summary>curistore-backend.database.seeders</summary>

| File                                                                                                                           | Summary                                                                           |
| ---                                                                                                                            | ---                                                                               |
| [DatabaseSeeder.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/database/seeders/DatabaseSeeder.php) | HTTP error 401 for prompt `curistore-backend/database/seeders/DatabaseSeeder.php` |

</details>

<details closed><summary>curistore-backend.routes</summary>

| File                                                                                                   | Summary                                                          |
| ---                                                                                                    | ---                                                              |
| [api.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/routes/api.php)         | HTTP error 401 for prompt `curistore-backend/routes/api.php`     |
| [web.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/routes/web.php)         | HTTP error 401 for prompt `curistore-backend/routes/web.php`     |
| [console.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/routes/console.php) | HTTP error 401 for prompt `curistore-backend/routes/console.php` |

</details>

<details closed><summary>curistore-backend.config</summary>

| File                                                                                                           | Summary                                                              |
| ---                                                                                                            | ---                                                                  |
| [auth.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/config/auth.php)               | HTTP error 401 for prompt `curistore-backend/config/auth.php`        |
| [database.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/config/database.php)       | HTTP error 401 for prompt `curistore-backend/config/database.php`    |
| [mail.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/config/mail.php)               | HTTP error 401 for prompt `curistore-backend/config/mail.php`        |
| [queue.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/config/queue.php)             | HTTP error 401 for prompt `curistore-backend/config/queue.php`       |
| [sanctum.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/config/sanctum.php)         | HTTP error 401 for prompt `curistore-backend/config/sanctum.php`     |
| [app.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/config/app.php)                 | HTTP error 401 for prompt `curistore-backend/config/app.php`         |
| [session.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/config/session.php)         | HTTP error 401 for prompt `curistore-backend/config/session.php`     |
| [services.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/config/services.php)       | HTTP error 401 for prompt `curistore-backend/config/services.php`    |
| [logging.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/config/logging.php)         | HTTP error 401 for prompt `curistore-backend/config/logging.php`     |
| [cache.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/config/cache.php)             | HTTP error 401 for prompt `curistore-backend/config/cache.php`       |
| [filesystems.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/config/filesystems.php) | HTTP error 401 for prompt `curistore-backend/config/filesystems.php` |

</details>

<details closed><summary>curistore-backend.bootstrap</summary>

| File                                                                                                          | Summary                                                               |
| ---                                                                                                           | ---                                                                   |
| [providers.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/bootstrap/providers.php) | HTTP error 401 for prompt `curistore-backend/bootstrap/providers.php` |
| [app.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/bootstrap/app.php)             | HTTP error 401 for prompt `curistore-backend/bootstrap/app.php`       |

</details>

<details closed><summary>curistore-backend.app.Providers</summary>

| File                                                                                                                                | Summary                                                                            |
| ---                                                                                                                                 | ---                                                                                |
| [AppServiceProvider.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/app/Providers/AppServiceProvider.php) | HTTP error 401 for prompt `curistore-backend/app/Providers/AppServiceProvider.php` |

</details>

<details closed><summary>curistore-backend.app.Http.Controllers</summary>

| File                                                                                                                       | Summary                                                                           |
| ---                                                                                                                        | ---                                                                               |
| [Controller.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/app/Http/Controllers/Controller.php) | HTTP error 401 for prompt `curistore-backend/app/Http/Controllers/Controller.php` |

</details>

<details closed><summary>curistore-backend.app.Http.Controllers.Api</summary>

| File                                                                                                                                           | Summary                                                                                       |
| ---                                                                                                                                            | ---                                                                                           |
| [BrandController.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/app/Http/Controllers/Api/BrandController.php)       | HTTP error 401 for prompt `curistore-backend/app/Http/Controllers/Api/BrandController.php`    |
| [AddressController.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/app/Http/Controllers/Api/AddressController.php)   | HTTP error 401 for prompt `curistore-backend/app/Http/Controllers/Api/AddressController.php`  |
| [PurchaseController.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/app/Http/Controllers/Api/PurchaseController.php) | HTTP error 401 for prompt `curistore-backend/app/Http/Controllers/Api/PurchaseController.php` |
| [OrderController.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/app/Http/Controllers/Api/OrderController.php)       | HTTP error 401 for prompt `curistore-backend/app/Http/Controllers/Api/OrderController.php`    |
| [UserController.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/app/Http/Controllers/Api/UserController.php)         | HTTP error 401 for prompt `curistore-backend/app/Http/Controllers/Api/UserController.php`     |
| [ProductController.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/app/Http/Controllers/Api/ProductController.php)   | HTTP error 401 for prompt `curistore-backend/app/Http/Controllers/Api/ProductController.php`  |
| [CategoryController.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/app/Http/Controllers/Api/CategoryController.php) | HTTP error 401 for prompt `curistore-backend/app/Http/Controllers/Api/CategoryController.php` |

</details>

<details closed><summary>curistore-backend.app.Models</summary>

| File                                                                                                           | Summary                                                                |
| ---                                                                                                            | ---                                                                    |
| [Purchase.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/app/Models/Purchase.php)   | HTTP error 401 for prompt `curistore-backend/app/Models/Purchase.php`  |
| [Order.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/app/Models/Order.php)         | HTTP error 401 for prompt `curistore-backend/app/Models/Order.php`     |
| [Wallet.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/app/Models/Wallet.php)       | HTTP error 401 for prompt `curistore-backend/app/Models/Wallet.php`    |
| [Product.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/app/Models/Product.php)     | HTTP error 401 for prompt `curistore-backend/app/Models/Product.php`   |
| [Address.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/app/Models/Address.php)     | HTTP error 401 for prompt `curistore-backend/app/Models/Address.php`   |
| [Brand.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/app/Models/Brand.php)         | HTTP error 401 for prompt `curistore-backend/app/Models/Brand.php`     |
| [Thumbnail.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/app/Models/Thumbnail.php) | HTTP error 401 for prompt `curistore-backend/app/Models/Thumbnail.php` |
| [User.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/app/Models/User.php)           | HTTP error 401 for prompt `curistore-backend/app/Models/User.php`      |
| [Category.php](https://github.com/IrminDev/curi-store/blob/master/curistore-backend/app/Models/Category.php)   | HTTP error 401 for prompt `curistore-backend/app/Models/Category.php`  |

</details>

---

## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **PHP**: `version 8.3.8`

### ⚙️ Installation

1. Clone the curi-store repository:

```sh
git clone https://github.com/IrminDev/curi-store
```

2. Change to the project directory:

```sh
cd curi-store
```

3. Install the dependencies:

```sh
cd curistore-backend
composer install
php artisan migrate
```

```sh
cd curistore-frontend
npm install
```

### 🤖 Running curi-store

Use the following commands to run curi-store backend (server): 

```sh
cd curistore-backend
php artisan serve
```

```sh
cd curistore-frontend
npm start
```

### 🧪 Environment variable

To run this project, you will need to add the following environment variables to your .env file inside curistore-backend

`JWT_SECRET`

`JWT_ALGO`

`DB_CONNECTION`

`DB_HOST`

`DB_PORT`

`DB_DATABASE`

`DB_USERNAME`

`DB_PASSWORD`

---

## 🛠 Project Roadmap

- [X] `► Added folder structure`
- [X] `► Added the frontend`
- [X] `► Database structure created`
- [X] `► Added the backend`
- [X] `► Connected the backend with the frontend`

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/IrminDev/curi-store/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/IrminDev/curi-store/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/IrminDev/curi-store/issues)**: Submit bugs found or log feature requests for Curi-store.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/IrminDev/curi-store
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---