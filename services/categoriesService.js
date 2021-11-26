const { Category } = require('../models');

const create = async ({ name }) => {
  const newCategory = await Category.create({ name });
  if (!newCategory) {
    throw new Error('Invalid Operation');
  }
 return newCategory;
};

module.exports = {
  create,
}; 