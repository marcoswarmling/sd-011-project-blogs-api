const db = require('../models');

const validateTitle = (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: '"title" is required' });
  }
  next();
};

const validateContent = (req, res, next) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ message: '"content" is required' });
  }
  next();
};

const validateCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }
  const getAllCategories = await db.Categories.findAll();
  const categoryIdArray = getAllCategories.map((category) => category.id);
  const categoryValidation = categoryIds
  .every((categoryId) => categoryIdArray.includes(categoryId));

  if (!categoryValidation) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = {
  validateTitle,
  validateContent,
  validateCategory,
};