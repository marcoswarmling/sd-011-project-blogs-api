const categoriesServices = require('../services/categoriesServices');

const newCategory = async (req, res) => {
  const { name } = req.body;

  const category = await categoriesServices.newCategory(name);

  return res.status(201).json(category);
};

const getAll = async (req, res) => {
  const allCategories = await categoriesServices.getAll();

  return res.status(200).json(allCategories);
};

module.exports = {
  newCategory,
  getAll,
};
