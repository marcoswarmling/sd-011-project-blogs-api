const { Categories } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Categories.create({ name });

  return newCategory;
};

module.exports = {
  createCategory,
};
