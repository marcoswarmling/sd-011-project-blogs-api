const { Categories } = require('../models');

async function createCategories(name) {
  const createdCategories = await Categories.create({ name });
  return createdCategories;
}

async function getAllCategories() {
  const allCategories = await Categories.findAll();
  return allCategories;
}

module.exports = {
  createCategories,
  getAllCategories,
};
