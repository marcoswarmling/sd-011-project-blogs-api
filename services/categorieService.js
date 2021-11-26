const { Categorie } = require('../models');

const create = async (name) => {
  const response = await Categorie.create({ name });
  
  return response;
};

const getAll = async () => {
  const response = await Categorie.findAll();

  return response;
};

module.exports = {
  create,
  getAll,
};
