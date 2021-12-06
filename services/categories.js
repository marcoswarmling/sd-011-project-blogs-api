const { Categories } = require('../models');

const createNewCategory = async ({ category }) => Categories.create({ category });

module.exports = {
  createNewCategory,
};
