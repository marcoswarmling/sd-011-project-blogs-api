const { Category } = require('../models');
const { Schema } = require('../services/validation');

const create = (createCategoryInput) => {
  new Schema('createCategory').validate(createCategoryInput);

  return Promise.resolve();
};

module.exports = {
  create,
};
