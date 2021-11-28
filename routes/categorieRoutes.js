const router = require('express').Router();
const { createCategorie, getAllCategories } = require('../controllers/categoriesControllers');

const {
  validateCategorieJoi,
} = require('../middlewares/validateCategories');

const {
  isValidateToken,
} = require('../middlewares/auth/validateAuth');

router.get('/', isValidateToken, getAllCategories);
router.post('/', validateCategorieJoi, isValidateToken, createCategorie);

module.exports = router;
