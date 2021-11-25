const { Categorie } = require('../../models');

const createCategory = async (name) => {
  const newUser = await Categorie.create({ name });

  return newUser;
};

const getAllCategories = async () => {
  const getCategories = await Categorie.findAll();

  return getCategories;
};

module.exports = {
  createCategory,
  getAllCategories,
};
