const express = require('express');

const Route = express.Router();

const CategoriesController = require('../controllers/Categories');

Route.post('/', CategoriesController.create);

module.exports = Route;
