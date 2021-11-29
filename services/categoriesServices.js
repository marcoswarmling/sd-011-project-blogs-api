const { Category } = require('../models');

const create = async (name) => {
  const category = await Category.create({ name });
  return category;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories.sort((a, b) => a.dataValues.id - b.dataValues.id);
};

module.exports = { create, getAllCategories };
