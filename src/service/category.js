const { Category } = require('../models');
const { verifyName } = require('../validations/category');

const createCategory = async (name) => {
  const isValidName = verifyName(name);
  if (isValidName) return isValidName;

  const newCategory = await Category.create({ name });
  return newCategory;
};

const getAllCategories = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

module.exports = {
  createCategory,
  getAllCategories,
};
