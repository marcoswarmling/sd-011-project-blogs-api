const express = require('express');

const { categoryValidation } = require('../validations');
const { createCategory, listCategories } = require('../controllers/categoriesController');

const categoryRouter = express.Router();

categoryRouter.post('/', categoryValidation, createCategory);
categoryRouter.get('/', listCategories);

module.exports = categoryRouter;