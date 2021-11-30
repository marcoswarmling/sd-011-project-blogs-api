const { User } = require('../models');

const getAll = async () => { // Para teste de model
  try {
    const result = await User.findAll();

   return result;
  } catch (error) {
    return error;
  }
};

module.exports = { getAll };