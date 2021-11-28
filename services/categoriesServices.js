const { Categories } = require('../models/index');

const createCategorie = async (name) => {
  const categorie = await Categories.create({ name });
  return categorie;
};

module.exports = { createCategorie };