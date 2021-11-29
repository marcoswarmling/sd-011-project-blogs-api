const { Category } = require('../models');

async function createCategoryInDB(categoryName) {
  await Category.create(categoryName);
  return true;
}

module.exports = {
  createCategoryInDB,
};