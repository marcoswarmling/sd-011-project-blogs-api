const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController');
const categoryValidation = require('../middlewares/categoryNameValidation');
const tokenValidation = require('../middlewares/tokenValidation');

router.post('/', tokenValidation, categoryValidation, CategoryController.createCategory);

module.exports = router;
