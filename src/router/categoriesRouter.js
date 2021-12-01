const router = require('express').Router();
const categoryController = require('../controllers/categoryController');
const tokenValidation = require('../middlewares/tokenValidation');

router.post('/', tokenValidation, categoryController.createCategory);
router.get('/', tokenValidation, categoryController.getCategories);

module.exports = router;
