# Project Inventory & POS Application by Rails and React

## Deployment:
- Latest Version of [Inventory & POS application](https://inventory-pos-final.herokuapp.com/)
- Test Account: test1@gmail.com | pw: 123
## Description

![Inventory-pos](client/src/images/inventory-pos-final-project.png)

- This project is building an inventory system that integrated POS features that allows users to manage inventory and sales in one place.
- The project is built by React for frontend, Rails for backend Application, and deployed on Heroku.
- The idea is inspired by [VENDHQ.com](https://www.vendhq.com/), which is a cloud-based application.

## Tech-Stack

- Ruby 2.7.4
- NodeJS (v16), and npm
- Heroku CLI
- Postgresql
- React
- [React-Bootstrap](https://react-bootstrap.netlify.app/)

## Requirements:
- Use a Rails API backend with a React frontend.
- Have at least two models with a one-to-many relationship on the backend, with full CRUD actions for at least one resource.
- Have at least two different client-side routes using React Router.
- Implement authentication/authorization. At a minimum, a user should be able to log into the site and stay logged in via user ID in the session hash. 
- Password protection is optional.
- Testing
## Models
[Inventory&POS Application Models](https://dbdiagram.io/d/6220cc6854f9ad109a53a3a3)
## Features:
### Available Features:
- User can sign-up and create a new account
- User can login with a created and authorized account
- User can logout account
- User can edit information such as username, email, address, phone
- If forgot password, user can reset password
- User can create a or many stores
- User can edit an existing store
- User can view a store information
- User can delete a store
- View all products
- View one product: information and sale transactions
- Search product by title
- Update product
- Create a new product
- Delete a product

### In Progress:
- Filter products by categories
- Filter products by brands
- Filter products by suppliers

### Up coming:
- Data DashBoard for product

## Test Application
### Local
- Fork and clone this repo
- cd to `P-4-5-FINAL-PROJECT-INVENTORY-POS` file
- `bundle install` => to install all dependencies for Rails Back-end App
- `npm install --prefix client` => to install all dependencies fro React Front-end App
- `rails s` => to run server for Rails Back-end App
- `npm start --prefix client` => to run server fro React Front-end App
- Note: this application is built with Postgresql

## Improvement & Bugs
- Refreshing the page, it shows a json format page. It seems heroku confused two port for front-end and back-end (Version Deployed on Heroku)
- After creating a new store, click manage => it shows an error. However, it can be fixed after refreshing the page. 
