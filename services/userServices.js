const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const getUserEmail = async (email) => {
  const userEmail = await User.findOne({ where: { email } });
  console.log(userEmail, 3); 
  return userEmail;
};

const createUser = async ({ name, email, password, image }) => {
  await User.create({ name, email, password, image });
  const ai = await User.create(name, email, password, image);
  console.log(ai, 1);

  // const userEmail = await User.findOne({ where: { email } });

  // if (userEmail) {
  //   return { message: 'User already registered' };
  // }

  const token = jwt.sign({ data: name }, secret, jwtConfig);
  return token;
};

module.exports = {
  getUserEmail,
  createUser,
};
