const { Categorie } = require('../../models');

const categorieRegister = async (name) => {
  const newCategorie = await Categorie.create({ name });
  return newCategorie;
};

module.exports = {
  categorieRegister,
};