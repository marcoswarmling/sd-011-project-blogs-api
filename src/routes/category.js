const router = require('express').Router();
const { categoryController } = require('../controllers');
const { validateJWT } = require('../middlewares');

router.post('/', validateJWT, categoryController.createCategory);
router.get('/', validateJWT, categoryController.getCategories);

module.exports = router;
