const { createdCategory, getCategories } = require('../service/categoriesService');

const createNewCategory = async (req, res) => {
  const category = await createdCategory(req.body);
  res.status(201).json(category);
};

const getAllCategory = async (req, res) => {
  const categories = await getCategories();
  res.status(200).json(categories);
};

module.exports = { createNewCategory, getAllCategory };