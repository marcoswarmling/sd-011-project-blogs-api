const { Categories } = require('../models');

const createCategory = async (name) => {
  if (name === '' || !name) {
    return { message: '"name" is required' };
  }

  return name;
};

const getCategories = async () => {
  const categories = await Categories.findAll();

  return categories;
};

module.exports = {
  createCategory,
  getCategories,
};