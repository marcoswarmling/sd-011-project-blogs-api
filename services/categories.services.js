const { Category } = require('../models');

async function createCategoryInDB(categoryName) {
  const { dataValues } = await Category.create(categoryName);
  console.log('category:', dataValues);
  return dataValues.id;
}

module.exports = {
  createCategoryInDB,
};