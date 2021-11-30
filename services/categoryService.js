const { Category } = require('../models');

const registerCategory = async (name) => {
  const result = await Category.create({ name });

  return result;
};

module.exports = { registerCategory };