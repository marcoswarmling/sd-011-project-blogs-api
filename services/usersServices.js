const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();

const jwtKey = process.env.JWT_SECRET;

const getUserByEmail = async (email) => {
  const userEmail = await Users.findOne({ where: { email } });
  return userEmail;
};

const createUser = (displayName, email, password, image) => {
  Users.create({ 
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