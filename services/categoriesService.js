const { Categories } = require('../models');

const createCategories = async (name) => {
  const createdCategories = await Categories.create({ name });
  return createdCategories;
  };

const getAllCategories = async () => {
  const categories = await Categories.findAll();
  return categories.sort((a, b) => a.dataValues.id - b.dataValues.id);
};

  module.exports = { createCategories, getAllCategories };