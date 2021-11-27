const routes = require('express').Router();
const categoriesControlers = require('../controllers/categoriesControlers');

const {
  isValidToken,
  isValidName,
} = require('../middlewares/jwtvalidation');

routes.post(
  '/',
  isValidName,
  isValidToken,
  categoriesControlers.addCategories,
  );

routes.get(
  '/',
  isValidToken,
  categoriesControlers.getCategories,
);

module.exports = routes;