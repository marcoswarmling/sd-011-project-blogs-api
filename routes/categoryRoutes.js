const express = require('express');
const rescue = require('express-rescue');
const { categoryController } = require('../controllers');
const { validateToken, validateCategory } = require('../middlewares');

const router = express.Router();

router
  .post('/categories',
  rescue(validateCategory),
  rescue(validateToken),
  rescue(categoryController.newCategory))
  .get('/categories', rescue(validateToken), rescue(categoryController.getCategories));

module.exports = router;