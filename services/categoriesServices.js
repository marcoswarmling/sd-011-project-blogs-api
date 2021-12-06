const { Categories } = require('../models');

const createCategory = async (category) => {
  const result = await Categories.create(category);
  return result;
};

module.exports = {
  createCategory,
};