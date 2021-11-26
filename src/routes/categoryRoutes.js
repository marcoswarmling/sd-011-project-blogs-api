const route = require('express').Router();

const TokenValidate = require('../middlewares/checkAuthenticatedUser');
const CategoryController = require('../controller/categoryController');

route.post('/', TokenValidate.checkAuthenticatedUser, CategoryController.createCategory);
route.get('/', TokenValidate.checkAuthenticatedUser, CategoryController.getAllCategories);

module.exports = route;