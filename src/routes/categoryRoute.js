const categoryRoute = require('express').Router();
const checkToken = require('../middlewares/checkToken');
const categoryController = require('../controllers/categoryController');

categoryRoute.post('/', checkToken, categoryController.create);

module.exports = categoryRoute;