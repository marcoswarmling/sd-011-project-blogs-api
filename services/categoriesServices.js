const { Categorie } = require('../models');

const create = async (name) => {
  const categorie = await Categorie.create({ name });
  return categorie;
};

const getAllCategories = async () => Categorie.findAll();

module.exports = { create, getAllCategories };
