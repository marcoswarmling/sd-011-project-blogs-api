const router = require('express').Router();
const categoryController = require('../controller/CategoryController');
const isCategoryValid = require('../validations/categoryValidation');
const isTokenValid = require('../validations/tokenValidation');

const validations = [isTokenValid, isCategoryValid];

router.post('/', validations, categoryController.createCategory);

module.exports = router;
