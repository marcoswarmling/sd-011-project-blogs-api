const router = require('express').Router();
const categorieController = require('../controllers/categorieController');
const validations = require('../middleware/validations');

router.post('/categories', 
  validations.validateCategorie,
  validations.validateToken,
  categorieController.create);

module.exports = router;