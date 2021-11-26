const express = require('express');

const categoryController = require('../controllers/categoryController');

const authValidator = require('../middlewares/validations/auth/authValidator');

const categoryRouter = express.Router();

categoryRouter.post('/', authValidator, categoryController.create);

module.exports = categoryRouter;
