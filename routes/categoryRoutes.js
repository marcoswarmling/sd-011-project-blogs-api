const router = require('express').Router();
const categoryController = require('../controllers/categoryController');
const validateToken = require('../middlewares/validateJWT');

router.post('/', validateToken, categoryController.createCategory);
router.get('/', validateToken, categoryController.getCategories);

module.exports = router;
