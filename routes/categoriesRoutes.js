const express = require('express');
const protect = require('../auth/protect');
const validateSchemas = require('../middlewares/validateSchemas');
const categoriesSchemas = require('../schemas/categoriesSchemas');
const categoriesControllers = require('../controllers/categoriesControllers');

const categoriesRoutes = express.Router();

categoriesRoutes
  .route('/')
  .post(
    protect, 
    validateSchemas(categoriesSchemas), 
    categoriesControllers.createCategoriesController,
    )
    .get(protect, categoriesControllers.getAllcategoriesControllers);

module.exports = categoriesRoutes;