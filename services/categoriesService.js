const { Category } = require('../models');

const createCategories = async (name) => {
  const createdCategories = await Category.create({ name });
  return createdCategories;
  };

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories.sort((a, b) => a.dataValues.id - b.dataValues.id);
};

  module.exports = { createCategories, getAllCategories };