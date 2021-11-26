const categoriesRoute = require('express').Router();

const { 
  createCategorieController, 
  getAllCategoriesController,
} = require('../controllers/categoriesController');
const { checkCategorieName } = require('../middlewares/categoriesValidations');
const { checkValidToken } = require('../middlewares/userValidations');

categoriesRoute.post(
  '/',
  checkCategorieName,
  checkValidToken,
  createCategorieController,
);

categoriesRoute.get(
  '/',
  checkValidToken,
  getAllCategoriesController,
);

module.exports = categoriesRoute;