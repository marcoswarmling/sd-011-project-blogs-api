const rescue = require('express-rescue');
const categoryService = require('../services/categoryService');

const createCategory = rescue(async (req, res) => {
  const { name } = req.body;
  const newCategory = await categoryService.createCategory({ name });
  if (!name) return res.status(400).json({ message: '"name" is required' });
  return res.status(201).json(newCategory);
});

const getCategories = rescue(async (req, res) => {
  const categories = await categoryService.getCategories();
  return res.status(200).json(categories);
});

module.exports = {
  createCategory,
  getCategories,
};