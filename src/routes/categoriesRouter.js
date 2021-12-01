const express = require('express');

const categoriesController = require('../controllers/categoriesController');

const tokenValidation = require('../middlewares/validations/token/tokenValidation');

const categoriesRouter = express.Router();

categoriesRouter.post('/', tokenValidation, categoriesController.createCategory);

module.exports = categoriesRouter;