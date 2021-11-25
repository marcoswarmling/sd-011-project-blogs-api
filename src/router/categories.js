const router = require('express').Router();
const categories = require('../controllers/categoriesController');
const { validReqCategories } = require('../validation/categoriesValidation');
const tokenValidation = require('../validation/tokenValidation');

router.post('/categories', tokenValidation, validReqCategories, categories.createNewCategory);

module.exports = router;