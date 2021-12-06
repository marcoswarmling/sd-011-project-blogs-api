const express = require('express');

const categoryController = require('../controllers/categoryController');

const authValidator = require('../middlewares/validations/authValidator');
const categoryValidator = require('../middlewares/validations/categoryValidator');

const categoryRouter = express.Router();

categoryRouter.post('/', authValidator, categoryValidator, categoryController.create);

module.exports = categoryRouter;