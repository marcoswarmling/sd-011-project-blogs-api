const { Category } = require('../models');

const newCategory = (payload) => Category.create(payload);

const getCategories = () => Category.findAll();

module.exports = {
  newCategory,
  getCategories,
};