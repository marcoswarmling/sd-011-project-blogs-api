const express = require('express');
const categoriesController = require('../controllers/Categories');
const { newCategoryValidations } = require('../middlewares');
const validationJWT = require('../auth/validationJWT');

const router = express.Router();

router.post('/', validationJWT, newCategoryValidations, categoriesController.create);

module.exports = router;
