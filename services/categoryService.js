const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const category = await Category.create({ name });
  const { dataValues } = category;
  return dataValues;
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = { createCategory, getAll };