# **A Lovely Flame Content Management System**

This repository contains the Content Management System (CMS) for A Lovely Flame, built using the Strapi headless CMS framework.

## **Project Description**

This project serves as the back-end content management system for the A Lovely Flame website/application. It provides a flexible and extensible platform for managing various types of content, including products, fragrances, blog posts, FAQs, and more.

## **Getting Started**

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### **Prerequisites**

You need to have Node.js and either npm or yarn installed on your system.

* Node.js (\>=12.x.x \<=16.x.x)  
* npm (\>=6.0.0) or yarn

### **Installation**

1. Clone the repository:  
```sh
   git clone https://github.com/Grantimatter/a-lovely-flame-cms  
   cd a-lovely-flame-cms
```

2. Install the dependencies:  
```sh
   npm install  
   # or  
   yarn install
```

3. Create your environment files. Copy the example files and update them with your specific configurations (database credentials, API keys, etc.).  
```sh
   cp config/env/development/database.js.example config/env/development/database.js  
   cp config/env/development/server.js.example config/env/development/server.js  
   # Do the same for production if needed
```

   *Note: Based on the package.json, the development environment uses SQLite, and production uses PostgreSQL. Ensure you have the necessary database set up.*

### **Running the Application**

Use the Strapi CLI commands via npm or yarn scripts:

* **Development Mode (with autoReload):**  
```sh
  npm run develop  
  # or  
  yarn develop
```

* **Production Mode (no autoReload):**
```sh
  npm run start  
  # or  
  yarn start
```

### **Building the Admin Panel**

To build the Strapi admin panel for production:
```sh
npm run build  
# or  
yarn build
```

For Windows environments, you might use:  
`npm run build:win`

## **Deployment**

Strapi offers various deployment options. Refer to the [Strapi Deployment Documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html) for detailed guides on deploying your application to different platforms.  
This project is configured with production database settings for PostgreSQL, suggesting a potential deployment environment like Heroku (based on the MY\_HEROKU\_URL environment variable in config/env/production/server.js).

## **Technologies and Dependencies**

* **Framework:** Strapi v4.3.4  
* **Backend:** Node.js  
* **Package Manager:** npm or yarn  
* **Databases:**  
  * SQLite (Development)  
  * PostgreSQL (Production)  
* **Key Plugins & Providers:**  
  * @strapi/plugin-i18n: Internationalization (i18n) plugin.  
  * @strapi/plugin-users-permissions: Handles user authentication and permissions.  
  * @strapi/provider-email-sendgrid: Email provider using SendGrid.  
  * @strapi/provider-upload-cloudinary: File upload provider using Cloudinary.  
  * strapi-stripe: Integration for Stripe payments.  
* **Other Dependencies:** better-sqlite3, pg, pg-connection-string, cross-env.

## **API Structure**

The CMS defines the following API endpoints and content types:

* `/api/blogs`: Manage blog posts.  
* `/api/bundles`: Manage product bundles.  
* `/api/carts`: Manage user shopping carts.  
* `/api/faqs`: Manage frequently asked questions.  
* `/api/fragrances`: Manage fragrance details and scent notes.  
* `/api/our-story`: Manage the "Our Story" single page content.  
* `/api/products`: Manage individual product details.  
* `/api/product-types`: Manage categories or types of products.  
* `/api/scent-notes`: Manage individual scent notes.

Each API directory typically contains content-types, controllers, routes, and services directories defining the structure and logic for that specific content type.

## **Project Structure Overview**
```
grantimatter-a-lovely-flame-cms/  
├── config/             # Strapi configuration files  
├── database/           # Database related files (migrations)  
├── public/             # Publicly accessible assets  
├── src/                # Source code for custom APIs and extensions  
│   ├── api/            # Custom API endpoints (blog, product, etc.)  
│   ├── extensions/     # Overrides or additions to core Strapi plugins (strapi-stripe, users-permissions)  
│   └── index.js        # Strapi lifecycle hooks (register, bootstrap)  
├── .editorconfig       # Editor configuration  
├── .eslintignore       # ESLint ignore rules  
├── .eslintrc           # ESLint configuration  
├── package.json        # Project dependencies and scripts  
└── README.md           # This file
```
## **Learn More**

* [Strapi Resource Center](https://strapi.io/resource-center)  
* [Official Strapi Documentation](https://docs.strapi.io)  
* [Strapi Tutorials](https://strapi.io/tutorials)  
* [Strapi Blog](https://strapi.io/blog)  
* [Strapi Changelog](https://strapi.io/changelog)  
* [Strapi GitHub Repository](https://github.com/strapi/strapi)
