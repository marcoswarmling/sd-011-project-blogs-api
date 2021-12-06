const express = require('express');

const routes = express.Router();

const tokenMiddleware = require('../middlewares/token');
const middlewares = require('../middlewares/categories');
const controllers = require('../controllers/categories');

routes.post('/',
  tokenMiddleware,
  middlewares.validateNewCategoryWithJoi,
  controllers.createNewCategory)
  .get('/',
  tokenMiddleware,
  controllers.getAllCategories);

module.exports = routes;
