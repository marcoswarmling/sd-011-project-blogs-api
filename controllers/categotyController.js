const { create, getAll } = require('../services/categoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = await create({ name });
  return res.status(201).json(category);
};

const getAllCategories = async (req, res) => {
  const categoriesList = await getAll();
  const categories = categoriesList.map(({ dataValues }) => dataValues);
  return res.status(200).json(categories);
};

module.exports = { createCategory, getAllCategories };
