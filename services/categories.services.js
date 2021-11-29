const { Category } = require('../models');

async function createCategoryInDB(categoryName) {
  const { dataValues } = await Category.create(categoryName);
  console.log('category:', dataValues);
  return dataValues.id;
}

async function getAllCategoriesInDB() {
  const categories = await Category.findAll();
  return categories;
}

module.exports = {
  createCategoryInDB,
  getAllCategoriesInDB,
};