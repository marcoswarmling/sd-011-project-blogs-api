const { Categories } = require('../models');

const create = async (name) => {
  const result = await Categories.create({ name });
  
  return result;
};

const getAll = async () => Categories.findAll();

module.exports = { create, getAll };