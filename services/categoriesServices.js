const { Categories } = require('../models/index');

const getAllCategories = async () => {
  const users = await Categories.findAll();
  return users;
};

const createCategorie = async (name) => {
  const categorie = await Categories.create({ name });
  return categorie;
};

module.exports = { createCategorie, getAllCategories };