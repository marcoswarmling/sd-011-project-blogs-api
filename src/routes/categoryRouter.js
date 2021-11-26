const express = require('express');

const categoryController = require('../controllers/categoryController');

const authValidator = require('../middlewares/validations/auth/authValidator');
const categoryValidator = require('../middlewares/validations/category/categoryValidator');

const categoryRouter = express.Router();

categoryRouter.post('/', authValidator, categoryValidator, categoryController.create);
categoryRouter.get('/', authValidator, categoryController.getAll);

module.exports = categoryRouter;
