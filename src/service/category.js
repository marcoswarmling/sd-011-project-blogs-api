const { Category } = require('../models');
const { verifyName } = require('../validations/category');

const createCategory = async (name) => {
  const isValidName = verifyName(name);
  if (isValidName) return isValidName;

  const newCategory = await Category.create({ name });
  return newCategory;
};

module.exports = {
  createCategory,
};
