const { Categories } = require('../models');

const createNewCategory = async (category) => Categories.create(category);

const getAllCategories = async () => Categories.findAll({ raw: true });

const getCategoryById = async (id) => Categories.findOne({ where: { id }, raw: true });

module.exports = {
  createNewCategory,
  getAllCategories,
  getCategoryById,
};
