const route = require('express').Router();

const TokenValidate = require('../middlewares/checkAuthenticatedUser');
const CategoryController = require('../controller/categoryController');

route.post('/', TokenValidate.checkAuthenticatedUser, CategoryController.createCategory);

module.exports = route;