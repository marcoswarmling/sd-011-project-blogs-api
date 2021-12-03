const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const getUserByEmail = async (email) => {
  const userEmail = await User.findOne({ where: { email } });
  return userEmail;
};

const createUser = async ({ name, email, password, image }) => {
  await User.create({ name, email, password, image });

  const user = await getUserByEmail(email);

  const token = jwt.sign({ data: user.id }, secret, jwtConfig);
  return token;
};

const login = async (email) => {
  const user = await getUserByEmail(email);

  if (user) {
    const token = jwt.sign({ data: user.id }, secret, jwtConfig);
    return token;
  }

  return false;
};

const getAll = async () => {
  const users = await User.findAll();

  return users;
};

const getId = async (id) => {
  const userId = await User.findOne({ where: { id } });

  return userId;
};

module.exports = {
  getUserByEmail,
  createUser,
  login,
  getAll,
  getId,
};
