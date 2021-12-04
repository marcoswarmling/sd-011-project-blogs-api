const { Category } = require('../models');

const createNewCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await Category.create({ name });

  return res.status(201).json(newCategory);
};

const getAllCategory = async (req, res) => {
  const category = await Category.findAll();

  return res.status(200).json(category);
};

module.exports = {
  createNewCategory,
  getAllCategory,
};
