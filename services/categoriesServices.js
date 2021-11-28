const { Category } = require('../models');
const { categoryNameValidation } = require('../validations/categoriesValidations');

const createCategory = async (name) => {
  const test = categoryNameValidation(name);
  if (test !== true) {
    return test;
  }
  const categorie = await Category.create({ name });
  return categorie;
};

const getCategories = async () => { 
  const users = await Category.findAll();
  return users;
}; 

module.exports = { createCategory, getCategories };