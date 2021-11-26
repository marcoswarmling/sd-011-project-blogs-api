const { Category } = require('../models');
const { validCategoryName } = require('../validators/categoryValidators');

const createCategory = async (name) => {
  if (validCategoryName(name).type === 'error') return validCategoryName(name);
  const { id } = await Category.create({ name });
  return { type: 'success', payload: { id, name } };
};

const getAll = async () => {
  const getAllResponse = await Category.findAll({ raw: true });
  return { type: 'success', payload: getAllResponse };
};

module.exports = {
  createCategory,
  getAll,
};