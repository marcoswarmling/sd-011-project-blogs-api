const { Categories } = require('../models');

const create = async ({ name }) => {
  const category = await Categories.create({ name });

  return category.dataValues;
};

const findAll = async () => {
  const categories = await Categories.findAll();

  return categories;
};

module.exports = {
  create,
  findAll,
};
