const { Categories } = require('../models');

const isNameValid = (name) => {
  if (!name) {
    return ({ message: '"name" is required' }); 
  }
  return null;
};

const create = async ({ name }) => {
  const nameNotValid = isNameValid(name);
  if (nameNotValid) return nameNotValid;

  const newCategory = await Categories.create({ name });

  return newCategory;
};

const getAll = async () => {
  const users = await Categories.findAll();
  return users;
};

module.exports = {
  create,
  getAll,
};