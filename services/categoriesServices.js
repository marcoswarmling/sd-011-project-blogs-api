const { Categorie } = require('../models');

const create = async (name) => {
  const categorie = await Categorie.create({ name });
  return categorie;
};

const getAllCategories = async () => {
  const categories = await Categorie.findAll();
  return categories.sort((a, b) => a.dataValues.id - b.dataValues.id);
};

module.exports = { create, getAllCategories };
