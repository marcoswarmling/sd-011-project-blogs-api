const categorieRoutes = require('express').Router();
const rescue = require('express-rescue');

const isValid = require('../validations/categorieValidation');

const auth = require('../validations/authJWT');
const categorieController = require('../controllers/categorieController');

categorieRoutes.post('/',
  auth.validateJWT,
  isValid.isValidName,
  rescue(categorieController.createNewCategorie));

  categorieRoutes.get('/',
  auth.validateJWT,
  rescue(categorieController.getAllCategories));

  categorieRoutes.get('/:id',
  auth.validateJWT,
  rescue(categorieController.getCategorieById));

module.exports = categorieRoutes;