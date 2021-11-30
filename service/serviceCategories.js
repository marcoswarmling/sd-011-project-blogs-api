const { Categories } = require('../models');

const create = async (name) => {
  const result = await Categories.create({ name });
  
  return result;
};

module.exports = { create };