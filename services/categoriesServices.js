const { Categories } = require('../models');

const getAllCategories = async () => {
  const getCategories = await Categories.findAll();
  return getCategories;
};

const createCategories = async (name) => {
  const category = await Categories.create({ name });
  return category;
};

module.exports = {
  getAllCategories,
  createCategories,
};
