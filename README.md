# Project Inventory & POS Application by Rails and React

## Description

This project is built a React frontend and Rails
backend together, and easily deploy them to Heroku.
The idea of building an inventory system that integrated POS features that allows user to manage inventory and make sale in one place.
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

- Done: User can sign-up and create a new account
- Done: User can login with an created account
- Done: User can logout account
- Done: User can edit information such as username, email, address, phone
- Done: If forgot password, user can reset password


## Test Application

- Fork and clone this repo
- cd to `P-4-5-FINAL-PROJECT-INVENTORY-POS` file
- `bundle install` => to install all dependencies for Rails Back-end App
- `npm install --prefix client` => to install all dependencies fro React Front-end App
- `rails s` => to run server for Rails Back-end App
- `npm start --prefix client` => to run server fro React Front-end App
- Note: this application is built with Postgresql
## Deploying

This application has been deployed your to Heroku. 
It's recommended to deploy your project early and push up
changes often to ensure that your code works equally well in production and
development environments.