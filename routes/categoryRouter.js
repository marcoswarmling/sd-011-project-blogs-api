const router = require('express').Router();
const categoryValidate = require('../services/categoryValidate');
const { tokenValidate } = require('../services/validateToken');

const categoryController = require('../controllers/categoryController');

router.post(
  '/categories',
  tokenValidate,
  categoryValidate.validateCategory,
  categoryController.createCategory,
);

router.get('/categories', tokenValidate, categoryController.getAllCategories);

module.exports = router;
