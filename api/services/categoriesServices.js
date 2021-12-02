const { Categories } = require('../models');

const createCategorie = async ({ name }) => {
  const newCategorie = await Categories.create({ name });
  return newCategorie;
};

module.exports = {
  createCategorie,
};