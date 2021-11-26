const { Categories } = require('../models');

const { 
  validateCategoryNameExists,
} = require('./utils/validators');

const createCategory = async (name) => {
  const validateNameCategory = validateCategoryNameExists(name);

  if (validateNameCategory) {
    return validateNameCategory;
  }

  const category = await Categories.create({ name });

  return category;
};

const getAllCategories = async () => {
  const users = await Categories.findAll();

  return users;
};

module.exports = { createCategory, getAllCategories };
