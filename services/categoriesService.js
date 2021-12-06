const { Categories } = require('../models');

const create = async ({ name }) => {
  const newCategory = await Categories.create({ name });
  // console.log('newCategoryService:', newCategory);

  return newCategory;
};

const getAll = async () => {
  const categories = await Categories.findAll();
  // console.log('getAllcategorieservice', categories);
  return categories;
};

module.exports = {
  create,
  getAll,
}; 