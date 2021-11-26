const CategoriesService = require('../services/categoriesService');

const createCategoy = async (req, res) => {
  const { name } = req.body;

  const user = await CategoriesService.createCategory(name);

  if (user.message) {
    return res.status(400).json(user);
  }

  return res.status(201).json(user);
};

const getAllCategories = async (_req, res) => {
  const categories = await CategoriesService.getAllCategories();

  return res.status(200).json(categories);
};

module.exports = {
  createCategoy,
  getAllCategories,
};
