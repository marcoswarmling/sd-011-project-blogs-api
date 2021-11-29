const router = require('express').Router();
const CategoriesController = require('../controllers/categories.controller');

// POSTS
router.post('/', CategoriesController.createCategory);

module.exports = router;