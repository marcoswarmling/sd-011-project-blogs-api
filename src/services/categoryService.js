const { createError } = require('../middlewares/errors');
const { Categories } = require('../models');
const { validateCategory } = require('../validations/validations');

const create = async (data) => {
  const { error: validationError } = validateCategory(data);

  if (validationError) return createError('badRequest', validationError.message);

  const { name } = data;

  const user = await Categories.findOne({ where: { name } });
  
  if (!user) {
    const newCategory = Categories.create({ name });
    return newCategory;
  }

  return createError('conflict', 'Category already exists');
};

const getAll = async () => {
  const categories = Categories.findAll();

  return categories;
};

module.exports = {
  create,
  getAll,
};
