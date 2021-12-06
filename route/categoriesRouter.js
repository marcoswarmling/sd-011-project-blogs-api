const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');
const { validaCategories } = require('../validations/categoriesValidate');
const validateToken = require('../auth/validateToken');

const router = Router();

router.post('/', validateToken, validaCategories, categoriesController.create);
router.get('/', validateToken, categoriesController.getAllCategories);

// teste
module.exports = router;
