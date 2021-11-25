const { Category } = require('../../models');

const createdCategory = async (name) => {
  const result = await Category.create(name);
  console.log(name);
  return result;
};

module.exports = { createdCategory };