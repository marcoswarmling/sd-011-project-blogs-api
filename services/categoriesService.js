const { Categories } = require('../models');

const createCategory = async (name) => {
  if (!name) return { status: 400, message: '"name" is required' };
  try {
    const category = await Categories.create({ name });

    return { category };
  } catch (error) {
    return { status: 409, message: 'User already registered' };
  }
};

const findAll = async () => {
  const result = await Categories.findAll();

  return result;
};

module.exports = {
  createCategory,
  findAll,
};