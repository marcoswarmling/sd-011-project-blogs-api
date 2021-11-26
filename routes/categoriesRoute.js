const categoriesRoute = require('express').Router();

const { createCategorieController } = require('../controllers/categoriesController');
const { checkCategorieName } = require('../middlewares/categoriesValidations');
const { checkValidToken } = require('../middlewares/userValidations');

categoriesRoute.post(
  '/',
  checkCategorieName,
  checkValidToken,
  createCategorieController,
);

module.exports = categoriesRoute;