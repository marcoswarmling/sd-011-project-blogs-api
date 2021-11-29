const db = require('../models');

const titleValidation = (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400)
    .json({ message: '"title" is required' });
  }
  next();
};

const contentValidation = (req, res, next) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400)
    .json({ message: '"content" is required' });
  }
  next();
};

const categoryValidation = async (req, res, next) => {
  const { categoryIds } = req.body;
  console.log(categoryIds);
  if (!categoryIds) {
    return res.status(400)
    .json({ message: '"categoryIds" is required' });
  }
  const getCategories = await db.Categories.findAll();
  const arrayOfCategoryIds = getCategories.map((category) => category.id);
  const checkCategories = categoryIds
    .every((categoryId) => arrayOfCategoryIds.includes(categoryId));
  
  if (!checkCategories) {
    return res.status(400)
    .json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = {
  titleValidation,
  contentValidation,
  categoryValidation,
};