const router = require('express').Router();
const CategoriesController = require('../controllers/categoriesController');
const validate = require('../midllewares/index');

router.post('/',
  validate.jwtValidation, validate.nameValidation, CategoriesController.registerCategory);

module.exports = router;
