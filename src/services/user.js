const { User } = require('../models');

const getAll = async () => { // For model test
  try {
    const result = await User.findAll();

   return result;
  } catch (error) {
    return error;
  }
};

const createIt = async (userData) => {
  try {
    const result = await User.create(userData);

   return result;
  } catch (error) {
    return error;
  }
};

module.exports = { getAll, createIt };