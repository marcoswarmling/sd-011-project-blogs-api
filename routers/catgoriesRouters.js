const router = require('express').Router();

const {
  validateJWTToken,
} = require('../middlewares/jwtValidations');

const {
  validateNameCategory,
} = require('../middlewares/categoryValidations');

const {
  createCategories,
} = require('../controllers/categoriesControllers');

router.post('/', validateJWTToken, validateNameCategory, createCategories);

module.exports = router;