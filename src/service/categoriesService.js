const { Categorie } = require('../../models');

const createCategory = async (name) => {
  const newUser = await Categorie.create({ name });

  return newUser;
};

module.exports = {
  createCategory,
};
