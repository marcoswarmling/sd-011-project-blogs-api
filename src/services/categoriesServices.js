const { Categorie } = require('../models');

const newCategory = async (name) => {
  const createdCategory = await Categorie.create({ name });

  return createdCategory.dataValues;
};

const getAll = async () => {
  const categories = await Categorie.findAll();

  const categoriesToArray = categories.map((categorie) => categorie.dataValues);

  return categoriesToArray;
};

module.exports = {
  newCategory,
  getAll,
};
