const { Category } = require('../models');

const create = async ({ name }) => {
  const category = await Category.create({ name });
  const { dataValues } = category;
  return dataValues;
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = { create, getAll };