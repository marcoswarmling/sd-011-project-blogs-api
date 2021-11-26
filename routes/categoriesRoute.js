const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const { verifyToken } = require('../services/utils/validators');

const route = express.Router();

route.post('/', verifyToken, categoriesController.createCategoy);
route.get('/', verifyToken, categoriesController.getAllCategories);

module.exports = route;
