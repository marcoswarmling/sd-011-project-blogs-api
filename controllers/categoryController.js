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

module.exports = router;
