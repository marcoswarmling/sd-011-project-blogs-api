const express = require('express');
const categoriesController = require('../controllers/Categories');
const validationJWT = require('../validationJwt');
const validationCategories = require('../validationCategories');

const router = express.Router();

router.post('/', validationJWT, validationCategories, categoriesController.create);

module.exports = router;