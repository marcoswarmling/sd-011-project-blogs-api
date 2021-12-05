const { Category } = require('../models');

const createNewCategory = async (name) => Category.create({ name });

const getAllCategory = async () => {
  const category = await Category.findAll();
  return category.sort((a, b) => a.dataValues.id - b.dataValues.id);
};
const getCategoryById = async (id) => Category.findByPk(id);

module.exports = {
  createNewCategory,
  getAllCategory,
  getCategoryById,
};