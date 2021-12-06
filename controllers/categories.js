const services = require('../services/categories');

const createNewCategory = async (req, res) => {
  const newCategory = req.body;
  console.log(newCategory);
  try {
    const createdCategory = await services.createNewCategory(newCategory);
    return res.status(201).json(createdCategory);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const getAllCategories = async (_req, res) => {
  const allCategories = await services.getAllCategories();
  return res.status(200).json(allCategories);
};

module.exports = {
  createNewCategory,
  getAllCategories,
};
