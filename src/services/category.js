const { Category } = require('../../models');
require('dotenv').config();

const createCategories = async (item) => {
  try {
    const newCategory = await Category.create(item);
    if (!newCategory) {
      return { error: true };
    }
    return newCategory;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createCategories,
};