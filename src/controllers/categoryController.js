const categoryService = require('../services/categoryService');

const getAll = async (req, res) => {
  const { authorization } = req.headers;
  const token = authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const categories = await categoryService.getAll(token);

  if (categories.message) {
    return res.status(401).json(categories);
  }

  return res.status(200).json(categories);
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { authorization } = req.headers;
  const token = authorization;
  
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const category = await categoryService.createCategory(name, token);

  if (category.message) {
    return res.status(401).json(category);
  }

  return res.status(201).json(category);
};

module.exports = {
  createCategory,
  getAll,
};