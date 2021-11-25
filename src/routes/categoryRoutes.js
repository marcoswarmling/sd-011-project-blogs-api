const categoriesRoutes = require('express').Router();

const CategoryControllers = require('../controllers/CategoryControllers');

const validateToken = require('../middlewares/validateToken');

categoriesRoutes.post('/', validateToken, CategoryControllers.create);

module.exports = categoriesRoutes;
