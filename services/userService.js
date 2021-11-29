const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const createUser = async ({ displayName, email, password, image }) => {
const createdUser = await User.create({ displayName, email, password, image });
const { id } = createdUser.dataValues;
const token = jwt.sign({ tokenValue: { id, email } }, SECRET);
  return token;
};

const getByEmail = async (email) => {
  const userEmail = await User.findOne({ where: { email } }); 
  return userEmail;
};

const getAllUser = async () => {
  const users = await User.findAll();
  return users;
};

const getUserById = async (id) => {
 const userId = await User.findByPk(id);
 return userId;
};

module.exports = { createUser, getByEmail, getAllUser, getUserById };