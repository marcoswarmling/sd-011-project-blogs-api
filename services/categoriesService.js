const { Categories } = require('../models');

const create = async ({ name }) => {
  const newCategory = await Categories.create({ name });
  if (!newCategory) {
    throw new Error('Invalid Operation');
  }
 return newCategory;
};

const findAll = async () => {
  const users = await Categories.findAll();
  return users;
};

const findById = async (id) => {
  const category = await Categories.findByPk(id);
  return category;
};

module.exports = {
  create,
  findAll,
  findById,
}; 