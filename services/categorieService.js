const { Categorie } = require('../models');

const createCategorie = async (name) => {
  const response = await Categorie.create({ name });

  return response;
};

module.exports = {
  createCategorie,
};
