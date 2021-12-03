const router = require('express').Router();
const CategoriesController = require('../controllers/categoriesController');
const validate = require('../midllewares/index');

router.get('/',
  validate.jwtValidation, CategoriesController.getAll);

router.post('/',
  validate.jwtValidation, validate.nameValidation, CategoriesController.registerCategory);

module.exports = router;
