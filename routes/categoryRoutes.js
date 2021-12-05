const router = require('express').Router();
const { createCategory } = require('../controllers/categoryController');
const validateToken = require('../middlewares/validateToken');

router.post('/', validateToken, createCategory);

module.exports = router;