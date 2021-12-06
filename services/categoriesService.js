const { Categories } = require('../models');

const create = async (data) => {
  try {
    const response = await Categories.create(data);
    return response;
  } catch (error) {
    return { error: 'Something went wrong' };
  }
};

module.exports = {
  create,
};