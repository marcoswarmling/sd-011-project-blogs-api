const categoryRoutes = require('express').Router();
const controller = require('../controllers/categoryController');
const validateToken = require('../auth/validateToken');
const { validateCategory } = require('../validations/validateBody');

categoryRoutes.route('/')
  .post(validateToken, validateCategory, controller.createCategory);

module.exports = categoryRoutes;
