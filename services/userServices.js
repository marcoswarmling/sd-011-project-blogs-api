const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

const { User } = require('../models');

const getByEmail = async (email) => {
  const userByEmail = await User.findOne({ where: { email } });
  return userByEmail;
};

const createUserService = async (displayName, email, password, image) => {
  await User.create({ displayName, email, password, image });
  const jwtToken = jwt.sign({ data: { displayName, email } }, secretKey);
  return jwtToken;
};

const getAllUsers = async () => {
  const users = await User.findAll();
  const arrayOfUsersData = users.map((i) => i.dataValues);
  return arrayOfUsersData;
};

module.exports = {
  getByEmail,
  createUserService,
  getAllUsers,
};