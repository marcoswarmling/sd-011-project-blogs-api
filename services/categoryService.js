const { Categorie } = require('../models');

const createCategory = async (name) => {
  const category = await Categorie
    .create({ name });

  return category;
};

module.exports = { 
  createCategory,
};