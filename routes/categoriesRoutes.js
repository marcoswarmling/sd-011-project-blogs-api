const router = require('express').Router();
const categoriesController = require('../controllers/categoriesController');
const validateJWT = require('../auth/validateJWT');

router.post('/', validateJWT, categoriesController.createCategory);
router.get('/', validateJWT, categoriesController.getCategories);

module.exports = router;
