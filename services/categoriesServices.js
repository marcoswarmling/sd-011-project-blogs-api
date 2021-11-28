const { Categorie } = require('../models');
const { categorieNameValidation } = require('../validations/categoriesValidations');

const createCategorie = async (name) => {
  const test = categorieNameValidation(name);
  if (test !== true) {
    return test;
  }
  const categorie = await Categorie.create({ name });
  return categorie;
};

const getCategories = async () => { 
  const users = await Categorie.findAll();
  return users;
}; 

module.exports = { createCategorie, getCategories };