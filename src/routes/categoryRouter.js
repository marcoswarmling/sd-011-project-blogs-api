const router = require('express').Router();
const categoryController = require('../controller/category');
const { verifyToken } = require('../middleware/token');

router.post('/', verifyToken, categoryController.createCategory);

module.exports = router;