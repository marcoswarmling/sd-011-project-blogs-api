const categoryRoutes = require('express').Router();
const rescue = require('express-rescue');

const isValid = require('../validations/categorieValidation');

const auth = require('../validations/authJWT');
const categoryController = require('../controllers/categoryController');

categoryRoutes.post(
  '/',
  auth.validateJWT,
  isValid.isValidName,
  rescue(categoryController.createNewCategory),
);

categoryRoutes.get(
  '/',
  auth.validateJWT,
  rescue(categoryController.getAllCategory),
);

categoryRoutes.get(
  '/:id',
  auth.validateJWT,
  rescue(categoryController.getCategoryById),
);

module.exports = categoryRoutes;
