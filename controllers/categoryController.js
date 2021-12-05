const categoryServices = require('../services/categoryServices');

const createNewCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await categoryServices.createNewCategory(name);
  return res.status(201).json(newCategory);
};

const getAllCategory = async (_req, res) => {
  const AllCategory = await categoryServices.getAllCategory();
  return res.status(200).json(AllCategory);
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  const categoryId = await categoryServices.getCategoryById(id);
  if (!categoryId) return res.status(404).json({ message: 'Category does not exist' });
  return res.status(200).json(categoryId);
};

module.exports = {
  createNewCategory,
  getAllCategory,
  getCategoryById,
};