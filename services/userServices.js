const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const createUser = async (displayName, email, password, image) => {
  await User.create({ displayName, email, password, image });
  
  const token = jwt.sign({ tokenValue: { email } }, SECRET);
  
  return token;
};

module.exports = { createUser };