const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/Category');
const { validateJWT } = require('../auth/validateJWT');

router.post('/', validateJWT, categoryController.createCategory);
router.get('/', validateJWT, categoryController.getCategories);

module.exports = router;