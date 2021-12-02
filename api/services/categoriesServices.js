const { Categories } = require('../models');

const getCategories = async () => {
  const categories = await Categories.findAll();
  return categories;
};

const createCategorie = async ({ name }) => {
  const newCategorie = await Categories.create({ name });
  return newCategorie;
};

module.exports = {
  getCategories,
  createCategorie,
};