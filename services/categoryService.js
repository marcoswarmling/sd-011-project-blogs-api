const { Category } = require('../models');

const registerCategory = async (name) => {
  const result = await Category.create({ name });

  return result;
};

const searchAllCategories = async () => {
  const result = await Category.findAll();

  return result;
};

module.exports = {
  registerCategory,
  searchAllCategories,
};