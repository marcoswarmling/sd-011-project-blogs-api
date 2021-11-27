const categoriesService = require('../services/categoriesService');

const createCategory = async (req, res, next) => {
  try {
    const { body } = req;

    const response = await categoriesService.createCategory(body);

    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllCategories = async (_req, res, next) => {
  try {
    const categories = await categoriesService.getAllCategories();

    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};