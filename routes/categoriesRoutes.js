const router = require('express').Router();
const categoriesController = require('../controllers/categories');
const validateJWT = require('../middlewares/validateJWT');
const { validateCategoryName } = require('../middlewares/validations');

router.get(
  '/',
  validateJWT,
  categoriesController.getAllCategories,
);

router.post(
  '/',
  validateJWT,
  validateCategoryName,
  categoriesController.createCategory,
);

module.exports = router;