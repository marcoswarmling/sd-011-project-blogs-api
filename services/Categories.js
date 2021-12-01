const { Categories } = require('../models');

const serverError = 'Something went wrong';

const create = async (categoryData) => {
  try {
    const response = await Categories.create(categoryData);
    return response;
  } catch (e) {
    return { error: serverError };
  }
};

module.exports = {
  create,
};