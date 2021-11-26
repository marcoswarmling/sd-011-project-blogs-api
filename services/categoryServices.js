const { Category } = require('../models');
const { validCategoryName } = require('../validators/categoryValidators');
const { validateToken } = require('../validators/userValidators');

const addCategory = async (name, token) => {
  if (validateToken(token).type === 'error') return validateToken(token);
  if (validCategoryName(name).type === 'error') return validCategoryName(name);
  const { id } = await Category.create({ name });
  return { type: 'success', payload: { id, name } };
};

const getAll = async (token) => {
  if (validateToken(token).type === 'error') return validateToken(token);
  const getAllResponse = await Category.findAll({ raw: true });
  return { type: 'success', payload: getAllResponse };
};

module.exports = {
  addCategory,
  getAll,
};