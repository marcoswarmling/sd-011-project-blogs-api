const model = require('../models');

const createNewCategory = async (category) => model.Categories.create(category);

module.exports = {
  createNewCategory,
};
