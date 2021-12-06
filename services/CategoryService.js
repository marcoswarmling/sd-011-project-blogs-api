const { Category } = require('../models');

const create = async (name) => {
  if (!name) return { message: '"name" is required', status: 400 };
  const response = await Category.create({ name });
  return response;
};

module.exports = {
  create,
};