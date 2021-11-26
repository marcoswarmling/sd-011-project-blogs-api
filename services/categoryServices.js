const { User } = require('../models');
const { validCategoryName } = require('../validators/categoryValidators');
const { validateToken } = require('../validators/userValidators');

const addCategory = async (name, token) => {
  if (validateToken(token).type === 'error') return validateToken(token);
  if (validCategoryName(name).type === 'error') return validCategoryName(name);
  const { id } = await User.create({ name });
  return { type: 'success', payload: { id, name } };
};

module.exports = {
  addCategory,
};