const { createError } = require('../middlewares/errors');
const { Category } = require('../models');
const { validateCategory } = require('../validations/validations');

const create = async (data) => {
  const { error: validationError } = validateCategory(data);

  if (validationError) return createError('badRequest', validationError.message);

  const { name } = data;

  const user = await Category.findOne({ where: { name } });
  
  if (!user) {
    const newCategory = Category.create({ name });
    return newCategory;
  }

  return createError('conflict', 'Category already exists');
};

module.exports = {
  create,
};
