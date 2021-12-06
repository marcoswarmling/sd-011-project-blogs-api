const router = require('express').Router();
const { createCategory, getCategories } = require('../controllers/categoryController');
const validateToken = require('../middlewares/validateJWT');

router.post('/', validateToken, createCategory);
router.get('/', validateToken, getCategories);

module.exports = router;
