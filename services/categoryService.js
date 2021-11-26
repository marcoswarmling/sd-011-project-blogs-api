const { Category } = require('../models');

const newCategory = (payload) => Category.create(payload);

module.exports = {
  newCategory,
};