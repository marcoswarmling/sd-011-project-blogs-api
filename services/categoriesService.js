const { Categories } = require('../models');

const createCategory = async ({ name }) => {
  const newCategory = await Categories.create({ name });

  return newCategory;
};

const getAllCategories = async () => {
  const categories = await Categories.findAll();

  return categories;
};

module.exports = {
  createCategory,
  getAllCategories,
};