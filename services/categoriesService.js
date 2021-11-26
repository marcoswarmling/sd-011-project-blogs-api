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

module.exports = { createCategory };
