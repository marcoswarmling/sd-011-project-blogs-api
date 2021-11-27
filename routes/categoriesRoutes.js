const router = require('express').Router();
const categoriesController = require('../controller/categoriesController');
const { tokenValidation } = require('../validations/tokenValidation');
const { categoriesValidations } = require('../validations/categoriesValidations');

router.post('/categories', 
  tokenValidation,
  categoriesValidations,
  categoriesController.createCategorie);

module.exports = router;