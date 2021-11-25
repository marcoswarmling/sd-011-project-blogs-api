const { Categorie } = require('../../models');

const categorieRegister = async (name) => {
  const newCategorie = await Categorie.create({ name });
  return newCategorie;
};

const getCategories = async () => {
  const allCategories = await Categorie.findAll();
  return allCategories;
};

module.exports = {
  categorieRegister,
  getCategories,
};