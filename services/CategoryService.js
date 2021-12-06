const { Category } = require('../models');

const create = async (name) => {
  if (!name) return { message: '"name" is required', status: 400 };
  const response = await Category.create({ name });
  return response;
};

const getAllCategories = async () => {
  const response = await Category.findAll();
  return response;
};

module.exports = {
  create,
  getAllCategories,
};