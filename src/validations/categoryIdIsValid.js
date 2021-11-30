const DefaultError = require('../errors/DefaultError');
const { Category } = require('../models');

module.exports = async (categoryIds) => {
  const categories = await Category.findAll();
  const validIds = categories.map(({ id }) => id);

  const isValid = categoryIds.every((id) => validIds.includes(id));
  if (!isValid) throw new DefaultError('"categoryIds" not found');

  return true;
};