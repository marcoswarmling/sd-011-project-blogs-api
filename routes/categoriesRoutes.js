const express = require('express');
const validateToken = require('../middlewares/validateToken');
const newCategoryMiddleware = require('../middlewares/validateNewCategory');
const CategoriesController = require('../controllers/categoriesController');

const route = express.Router();

route.post(
  '/',
  validateToken,
  newCategoryMiddleware.validateCreateCategoryBody,
  newCategoryMiddleware.validateRegisteredCategory,
  CategoriesController.create,
);

module.exports = route;
