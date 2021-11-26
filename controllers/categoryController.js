const express = require('express');
const { Category } = require('../models');

const router = express.Router();

const validateToken = require('../middlewares/validateToken');
const validateCategorySchema = require('../middlewares/validateCategorySchema');

router.post('/', validateToken, validateCategorySchema, async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = await Category.create({ name });
    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(400).json({
      message: 'Invalid fields',
    });
  }
});

router.get('/', validateToken, async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
});

module.exports = router;
