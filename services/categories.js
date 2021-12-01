const { Category } = require('../models');
const { status, categoriesMessages } = require('../Helpers/status&messages');

const createCategory = async (name) => {
  if (!name) {
    return { status: status.badRequest, message: categoriesMessages.nameRequired };
  }
const newCategory = await Category.create({ name });
return newCategory;
};

const getCategories = async () => Category.findAll();

module.exports = { createCategory, getCategories };