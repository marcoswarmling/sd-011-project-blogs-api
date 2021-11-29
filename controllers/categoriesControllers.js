const rescue = require('express-rescue');
const { create, getAllCategories } = require('../services/categoriesServices');

const createCategory = rescue(async (req, res) => {
  const { name } = req.body;
  const category = await create(name);

  return res.status(201).json(category);
});

const getCategories = rescue(async (_req, res) => {
  const categories = await getAllCategories();
  console.log(categories);
  return res.status(200).json(categories);
});

module.exports = { createCategory, getCategories };
