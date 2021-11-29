const categoryService = require('../services/categoryService');

const create = async (req, res, next) => {
  const newCategory = await categoryService.create(req.body);

  if (newCategory.err) return next(newCategory.err);

  return res.status(201).json(newCategory);
};

const getAll = async (_req, res, _next) => {
  const categories = await categoryService.getAll();

  return res.status(200).json(categories);
};

module.exports = {
  create,
  getAll,
};
