const router = require('express').Router();
const { createCategory, getAllCategories } = require('../controllers/categoryController');
const validateToken = require('../middlewares/validateToken');

router.post('/', validateToken, createCategory);
router.get('/', validateToken, getAllCategories);

module.exports = router;