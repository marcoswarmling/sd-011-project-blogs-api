const categoriesRouter = require('express').Router();

const { validateCategory } = require('../middlewares/validation');
const autenticateToken = require('../middlewares/authentication');
const { createCategory, getAllCategories } = require('../controllers/categoriesController');

categoriesRouter.post('/', autenticateToken, validateCategory, createCategory);
categoriesRouter.get('/', autenticateToken, getAllCategories);

module.exports = categoriesRouter;