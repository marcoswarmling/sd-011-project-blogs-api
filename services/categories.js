const { Categories } = require('../models');

const createNewCategory = async (category) => Categories.create(category);

const getAllCategories = async () => Categories.findAll({ raw: true });

module.exports = {
  createNewCategory,
  getAllCategories,
};
