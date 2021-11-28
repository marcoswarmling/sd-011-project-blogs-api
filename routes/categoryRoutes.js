const express = require('express');

const { categoryValidation } = require('../validations');
const { createCategory } = require('../controllers/categoryController');

const categoryRouter = express.Router();

// Requisito 5 - Rota Category - POST
categoryRouter.post('/', categoryValidation, createCategory);

module.exports = categoryRouter;