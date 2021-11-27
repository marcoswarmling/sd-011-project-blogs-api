const categoriesRouter = require('express').Router();

const { validateCategory } = require('../middlewares/validation');
const autenticateToken = require('../middlewares/authentication');
const { createCategory } = require('../controllers/categoriesController');

categoriesRouter.post('/', autenticateToken, validateCategory, createCategory);

module.exports = categoriesRouter;