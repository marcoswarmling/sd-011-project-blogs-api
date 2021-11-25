const router = require('express').Router();

const {
  jwtValid,
} = require('../middleware/userMiddlw');

const {
  validCategories,
} = require('../middleware/categoriesMiddlw');

const {
  categorieCreate,
  getAllCategories,
} = require('../controllers/categorieController');

router.post('/categories', jwtValid, validCategories, categorieCreate);

router.get('/categories', jwtValid, getAllCategories);

module.exports = router;