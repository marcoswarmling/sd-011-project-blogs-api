const error = require('../utils/errors');

const newCategory = (payload) => {
  if (!payload.name) throw error.nameIsRequired;
};

module.exports = {
  newCategory,
};