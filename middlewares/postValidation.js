const { Categories } = require('../models');

const validateTitle = (req, res, next) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: '"title" is required' });
  next();
};

const validateContent = (req, res, next) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ message: '"content" is required' });
  next();
};

const validateCatIds = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds || categoryIds === '') {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }
  const allCategories = await Categories.findAll();
  const categoryIdList = allCategories.map(({ dataValues: { id } }) => id);
  const verifyCategories = categoryIds.every((c) => categoryIdList.includes(c));
  if (!verifyCategories) return res.status(400).json({ message: '"categoryIds" not found' });
  next();
};

module.exports = { validateTitle, validateContent, validateCatIds };