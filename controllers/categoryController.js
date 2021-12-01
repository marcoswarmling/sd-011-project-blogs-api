const categoryService = require('../services/categoryService');

const registerCategory = async (req, res) => {
  const { name } = req.body;

  const response = await categoryService.registerCategory(name);

  return res.status(201).json(response);
};

const searchAllCategories = async (_req, res) => {
  const response = await categoryService.searchAllCategories();

  return res.status(200).json(response);
};

module.exports = {
  registerCategory,
  searchAllCategories,
};