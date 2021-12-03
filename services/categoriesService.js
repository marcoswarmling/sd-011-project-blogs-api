const { Categories } = require('../models');

const createCategory = async (name) => {
  const insertCategory = await Categories.create({ name });
  const insertedCategory = insertCategory.dataValues;

  return insertedCategory;
};

module.exports = { createCategory };
