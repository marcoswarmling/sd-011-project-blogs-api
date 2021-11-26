const express = require('express');
const CategoriesController = require('../controllers/categoriesController');

const { userAuth } = require('../middlewares/auth/validateAuth');
const { CategoryPostValidate } = require('../middlewares/ categoriesValidation');

const router = express.Router();

router.post('/', userAuth, CategoryPostValidate, CategoriesController.create);

module.exports = router;