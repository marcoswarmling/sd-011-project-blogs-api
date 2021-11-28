const categoriesServices = require('../services/categoriesServices');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const response = await categoriesServices.createCategory(name);
  if (response.error) {
    const { error } = response;
    return res.status(400).json(error);
  }
  return res.status(201).json(response);
};

const getCategories = async (_req, res) => {
  const categories = await categoriesServices.getCategories();
  return res.status(200).json(categories);
};

module.exports = { createCategory, getCategories };