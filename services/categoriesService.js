const { Categories } = require('../models');

const create = async (name) => {
  const newCategory = await Categories.create(name);
  // console.log('newCategoryService:', newCategory);

  return newCategory;
};

module.exports = {
  create,
}; 