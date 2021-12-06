require('dotenv').config();
const { Users } = require('../models');

const getUserByEmailAndPassword = async (email, password) => {
  try {
    const response = await Users.findOne({ where: { email, password } });
    // está retornando sempre null
    return response;
  } catch (err) {
    return { message: err.message };
  }
};

module.exports = { getUserByEmailAndPassword };