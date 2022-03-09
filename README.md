# Project Inventory & POS Application by Rails and React

## Deployment:
- Latest Version of [Inventory & POS application](https://inventory-pos-final.herokuapp.com/)
## Description

![Inventory-pos](client/src/images/inventory-pos-final-project.png)

This project is about a React frontend and Rails backend Application which is deployed on Heroku.
The idea of building an inventory system that integrated POS features that allows users to manage inventory and sales in one place.
The idea is inspired by [VENDHQ.com](https://www.vendhq.com/), which is a cloud-based application.

## Tech-Stack

- Ruby 2.7.4
- NodeJS (v16), and npm
- Heroku CLI
- Postgresql
- React
- [React-Bootstrap](https://react-bootstrap.netlify.app/)

## Models
[Inventory&POS Application Models](https://dbdiagram.io/d/6220cc6854f9ad109a53a3a3)

## Features:

### Done:
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
- Search product by title

### In Progress:
- Update product
- Create a new product
- Delete a product

### Up coming:
- View one product: information and sale transactions
- Filter products by categories
- Filter products by brands
- Filter products by suppliers

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
