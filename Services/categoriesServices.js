const { Categories } = require('../models/index');

const createCategories = async (name) => {
  const categoryExists = await Categories.findOne({ where: { name } });
  if (categoryExists) { 
    return { errorCode: 'CATEGORY_ALREADY_EXISTS' }; 
  }
  const create = await Categories.create({ name });
  return create;
};

const getCategory = async () => {
  const categories = await Categories.findAll();
  return categories;
};

module.exports = {
  createCategories,
  getCategory,
};
