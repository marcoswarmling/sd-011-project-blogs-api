const CategoryService = require('../service/categoriesService');

const create = async (req, res, _next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  const category = { ...req.body };
  if (!category.name) return res.status(400).json({ message: '"name" is required' });
  const response = await CategoryService.create(category, authorization);
  if (response.message) return res.status(401).json({ message: response.message });
  return res.status(201).json(response);
};

const getAll = async (req, res, _next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  const categories = await CategoryService.getAll(authorization);
  
  if (categories.message) return res.status(401).json({ message: categories.message });

  res.status(200).json(categories);
};

module.exports = {
  getAll,
  create,
};