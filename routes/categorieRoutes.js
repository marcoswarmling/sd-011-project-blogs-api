const router = require('express').Router();
const { createCategories } = require('../controllers/categoriesControlles');

const {
  validateCategorieJoi,
} = require('../middlewares/validateCategories');

const {
  isValidateToken,
} = require('../middlewares/auth/validateAuth');

router.post('/', validateCategorieJoi, isValidateToken, createCategories);

module.exports = router;
