const { Categories } = require('../models');

const createCategory = async (name) => {
  const insertCategory = await Categories.create({ name });
  const insertedCategory = insertCategory.dataValues;

  return insertedCategory;
};

const getAll = async () => {
  const categorie = await Categories.findAll();

  return categorie;
};

module.exports = { createCategory, getAll };