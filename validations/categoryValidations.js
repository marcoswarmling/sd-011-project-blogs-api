const error = require('../utils/errors');

const newCategory = (payload) => {
  if (!payload.name) throw error.nameIsRequired;
};

const categoryExists = (payload) => {
  if (!payload) throw error.categoryNotFound;
};

module.exports = {
  newCategory,
  categoryExists,
};