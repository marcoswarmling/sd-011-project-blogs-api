const { Category } = require('../models');

const verifyName = (name) => {
  if (!name) {
    return { err: { code: 400, message: { message: '"name" is required' } } };
  }
};

const createCategory = async ({ name }) => {
  if (verifyName(name)) return verifyName(name);
  const category = await Category.create({ name });
  return category;
};

module.exports = { createCategory };