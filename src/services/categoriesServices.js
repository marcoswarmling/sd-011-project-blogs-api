const { Categorie } = require('../models');

const newCategory = async (name) => {
  const createdCategory = await Categorie.create({ name });

  return createdCategory.dataValues;
};

module.exports = {
  newCategory,
};
