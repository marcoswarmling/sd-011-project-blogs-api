const express = require('express');

const Route = express.Router();

const CategoriesController = require('../controllers/Categories');

Route.route('/')
  .post(CategoriesController.create)
  .get(CategoriesController.listAll);

module.exports = Route;
