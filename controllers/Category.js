const { Category } = require('../services');

const createCategory = async (req, res, next) => {
  const { name } = req.body;

  try {
    const newCategory = await Category.createCategory(name);

    return res.status(201).json(newCategory);
  } catch (error) {
    return next(error);
  }
};

const getAllCategories = async (_req, res, next) => {
  try {
    const categories = await Category.getAllCategories();

    return res.status(200).json(categories);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};
