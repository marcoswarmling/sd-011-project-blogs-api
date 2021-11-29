const categoryRoute = require('express').Router();
const checkToken = require('../middlewares/checkToken');
const categoryController = require('../controllers/categoryController');

categoryRoute.post('/', checkToken, categoryController.create);
categoryRoute.get('/', checkToken, categoryController.getAll);

module.exports = categoryRoute;