const { Categories } = require('../models');
const errors = require('../schemas/errorMessage');

const getByName = async (name) => {
  const category = await Categories.findOne({ where: { name } });

  return category;
};

const createCategories = async (name) => {
  const nameExists = await getByName(name);

  if (nameExists) throw errors.categories.alreadyExists;

  await Categories.create({ name });

  return getByName(name);
};

const getAll = async () => {
  const listCategories = await Categories.findAll({ raw: true });

  return listCategories;
};

module.exports = {
  createCategories,
  getAll,
};