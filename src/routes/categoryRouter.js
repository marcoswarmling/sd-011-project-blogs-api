const router = require('express').Router();
const categoryController = require('../controller/category');
const { verifyToken } = require('../middleware/token');

router.use(verifyToken);
router.post('/', categoryController.createCategory);
router.get('/', categoryController.getAllCategories);

module.exports = router;