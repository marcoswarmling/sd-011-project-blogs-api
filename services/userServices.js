const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const createUser = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
  const { id } = newUser.dataValues;
  const token = jwt.sign({ tokenValue: { id, email } }, SECRET);
  return token;
};

const getUserByEmail = async (email) => User.findOne({ where: { email } });

const getAllUsers = async () => User.findAll();

const getUserByPk = async (id) => User.findByPk(id);

module.exports = { createUser, getUserByEmail, getAllUsers, getUserByPk };