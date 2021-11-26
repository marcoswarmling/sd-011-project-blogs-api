const { Category } = require('../models');

const create = async ({ name }) => {
  const newCategory = await Category.create({ name });
  if (!newCategory) {
    throw new Error('Invalid Operation');
  }
 return newCategory;
};

const findAll = async () => {
  const users = await Category.findAll();
  return users;
};

module.exports = {
  create,
  findAll,
}; 