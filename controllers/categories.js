const categoriesServices = require('../services/categories');

const createCategory = async (req, res, _next) => {
  const { name } = req.body;

  const newCategory = await categoriesServices.createCategory(name);

  return res.status(201).json(newCategory);
};

const getAllCategories = async (_req, res, _next) => {
  const categories = await categoriesServices.getAllCategories();

  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAllCategories,
};
