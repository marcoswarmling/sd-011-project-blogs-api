const db = require('../models');

const isTitleValid = (req, res, next) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: '"title" is required' });
  }
  next();
};

const isContentValid = (req, res, next) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: '"content" is required' });
  }
  next();
};

const isCategoryIdsValid = async (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }
  const getAllCategories = await db.Categories.findAll();

  const categoryIdsArr = getAllCategories.map((category) => category.id);

  const validCategories = categoryIds.every((categoryId) => categoryIdsArr.includes(categoryId));

  if (!validCategories) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = {
  isTitleValid,
  isContentValid,
  isCategoryIdsValid,
};
