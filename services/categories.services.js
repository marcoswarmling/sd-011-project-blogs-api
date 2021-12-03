const { Category } = require('../models');

async function createCategoryInDB(categoryName) {
  const { dataValues } = await Category.create(categoryName);
  return dataValues.id;
}

async function getAllCategoriesInDB() {
  const categories = await Category.findAll();
  return categories;
}

async function getCategoryById(id) {
  const category = await Category.findOne({ where: { id } });
  return category;
}

module.exports = {
  createCategoryInDB,
  getAllCategoriesInDB,
  getCategoryById,
};