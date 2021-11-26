const { Categorie } = require('../../models');

const create = async (name) => {
  const newCategorie = await Categorie.create({ name });
  return newCategorie;
};

const getAll = async () => {
  const getAllCategories = await Categorie.findAll();
  console.log(getAllCategories);
  return getAllCategories;
};

module.exports = { create, getAll };
