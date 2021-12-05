const categoryService = require('../services/categoryService');

const ERROR_MESSAGE = {
  message: 'Internal Server Error',
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = await categoryService
    .createCategory(name);

    res
      .status(201)
      .json(category);
  } catch (error) {
    res
      .status(500)
      .json(ERROR_MESSAGE);
  } 
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService
    .getAllCategories();
    
    res
      .status(200)
      .json(categories);
  } catch (error) {
    res
      .status(500)
      .json(ERROR_MESSAGE);
  } 
};

module.exports = {
  createCategory,
  getAllCategories,
};
