const express = require('express');

const { categoryValidation } = require('../validations');
const { createCategory } = require('../controllers/categoriesController');

const categoryRouter = express.Router();

categoryRouter.post('/', categoryValidation, createCategory);

module.exports = categoryRouter;