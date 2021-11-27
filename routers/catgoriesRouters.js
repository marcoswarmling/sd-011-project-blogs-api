const router = require('express').Router();

const {
  validateJWTToken,
} = require('../middlewares/jwtValidations');

const {
  validateNameCategory,
} = require('../middlewares/categoryValidations');

const {
  createCategories,
  getAllCategories,
} = require('../controllers/categoriesControllers');

router.get('/', validateJWTToken, getAllCategories);
router.post('/', validateJWTToken, validateNameCategory, createCategories);

module.exports = router;