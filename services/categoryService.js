const { Categories } = require('../models');

const createCategory = async ({ name }) => {
  const category = await Categories.create({ name });
  const { dataValues } = category;
  return dataValues;
};

const getAll = async () => {
  const categories = await Categories.findAll();
  return categories;
};

module.exports = { createCategory, getAll };