const { Categorie } = require('../models');

const categorieValidate = async (name) => {
  const CategorieDb = await Categorie.findOne({ where: { name } });

  if (CategorieDb) return ({ message: 'User already registered' });

  const register = await Categorie.create({ name });
  return register;
};

const getCategories = async () => {
  const ctgDB = await Categorie.findAll();

  if (!ctgDB) return ({ message: 'Token not found' });

  return ctgDB;
};

module.exports = {
  categorieValidate,
  getCategories,
};