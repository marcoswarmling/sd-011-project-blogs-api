const { Category } = require('../models');

const getAll = async () => {
  try {
    const result = await Category.findAll();

    return result;
  } catch (error) {
    return error;
  }
};

const createIt = async (CategoryData) => {
  try {
    const result = await Category.create(CategoryData);

    return result;
  } catch (error) {
    return error;
  }
};

const getAllByArrayIds = async (categoryIds) => {
  try {
    const result = await Category.findAll({ where: { id: categoryIds } });

    return result;
  } catch (error) {
    return error;
  }
};

module.exports = { createIt, getAll, getAllByArrayIds };