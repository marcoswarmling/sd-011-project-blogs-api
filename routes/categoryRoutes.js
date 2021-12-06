const Router = require('express').Router();
const { createNewCategory, getAllCategories } = require('../controllers/categotyController');
const { validateCategory } = require('../middlewares/categoryValidation');
const { validateToken } = require('../middlewares/tokenManager');

Router.post('/',
  validateCategory,
  validateToken,
  createNewCategory);

Router.get('/',
  validateToken,
  getAllCategories);

module.exports = Router;
