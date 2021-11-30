const { Categories } = require('../models');

const serviceCreateCategories = async (categoriesData) => {
  const newCategories = await Categories.create({ name: categoriesData });
  return newCategories;
};

module.exports = serviceCreateCategories;