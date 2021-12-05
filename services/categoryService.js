const { Categorie } = require('../models');

const createCategory = async (name) => {
  const category = await Categorie
    .create({ name });

  return category;
};

const getAllCategories = async () => {
  const users = await Categorie
    .findAll();

  return users;
};

module.exports = { 
  createCategory,
  getAllCategories,
};