const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();

const jwtKey = process.env.JWT_SECRET;

const getUserByEmail = async (email, password) => {
  const userResult = await Users.findOne({ where: { email, password } });
  if (!userResult) {
    return { message: 'Invalid fields' };
  }
  const { id: userId, displayName } = userResult; 
  const token = jwt.sign({ userId, email, displayName }, jwtKey);
  return token;
};

module.exports = {
  getUserByEmail,
};