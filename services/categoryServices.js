const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const newCategory = await Category.create({ name });

  return newCategory;
};

const getAll = async () => {
  const categories = await Category.findAll();
  
  return categories;
};

const getCategoryIds = async (categoryIds) => {
  const categories = await Category.findAll({ where: { id: categoryIds } });

  return categories;
};

module.exports = {
  createCategory,
  getAll,
  getCategoryIds,
};