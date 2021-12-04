const { Categories } = require('../models');

const findOrCreate = async (name) => {
  const [categories, created] = await Categories.findOrCreate({
    where: { name },
    defaults: { name },
  });

  if (!created) {
    throw new Error('CategoriesAlreadyRegistered');
  }

  return categories;
};

const getAllcategories = async () => Categories.findAll();

const getCategory = async (id) => Categories.findByPk(id);

module.exports = {
  findOrCreate,
  getAllcategories,
  getCategory,
};
