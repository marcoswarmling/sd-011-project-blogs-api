const { Categories } = require('../models');

async function createCategories(name) {
  const result = await Categories.create({ name });
  return result;
}

module.exports = {
  createCategories,
};
