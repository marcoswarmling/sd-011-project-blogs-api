const { Category } = require('../models');
const { status, categoriesMessages } = require('../Helpers/status&messages');

const createCategory = async (name) => {
  console.log('entrei no service');
  if (!name) {
    return { status: status.badRequest, message: categoriesMessages.nameRequired };
  }
const newCategory = await Category.create({ name });
console.log('newCategory SERVICE', newCategory);
return newCategory;
};

module.exports = { createCategory };