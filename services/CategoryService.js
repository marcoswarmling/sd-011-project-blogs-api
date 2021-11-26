const { Categories } = require('../models');

const createCategory = async (name) => {
  const category = await Categories.create({ name });

  const data = {
    id: category.id,
    name: category.name,
  };
  
  return data; 
};

const getAll = async () => {
  const data = await Categories.findAll();
  return data;
};

module.exports = {
  createCategory,
  getAll,
};