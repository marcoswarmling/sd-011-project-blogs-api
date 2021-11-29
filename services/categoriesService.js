const { Categories } = require('../models');

const { validateCategoriesName } = require('../validation');

const createCategories = async (name) => {
  const validateName = validateCategoriesName(name);
  if (validateName.message) return validateName;

  const newCategories = await Categories.create({ name });

  return newCategories;
};

const getAllCategories = async () => {
  const getCategories = await Categories.findAll();

  return getCategories;
};

module.exports = {
  createCategories,
  getAllCategories,
};