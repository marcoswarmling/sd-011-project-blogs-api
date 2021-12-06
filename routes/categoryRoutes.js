const Router = require('express').Router();
const { createCategory, getAllCategories } = require('../controllers/categotyController');
const { validateCategory } = require('../middlewares/categoryValidation');
const { validateToken } = require('../middlewares/tokenManager');

Router.post('/',
  validateToken,
  validateCategory,
  createCategory);

Router.get('/',
  validateToken,
  getAllCategories);

module.exports = Router;
