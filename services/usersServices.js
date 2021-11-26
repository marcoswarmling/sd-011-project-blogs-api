const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const jwtKey = process.env.JWT_SECRET;

const getUserByEmail = async (email) => User.findOne({ where: { email } });

const createUser = async (displayName, email, password, image) => {
  await User.create({ 
    displayName, 
    email, 
    password, 
    image,
  });
  const token = jwt.sign({ data: { displayName, email } }, jwtKey);
  return token;
};

module.exports = {
  getUserByEmail,
  createUser,
};