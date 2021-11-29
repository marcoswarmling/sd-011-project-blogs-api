const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const createNewUser = async ({ displayName, email, password, image }) => {
 await User.create({ displayName, email, password, image });

 const token = jwt.sign({ tokenValue: { email } }, SECRET);

 return token;
};

const getUserByEmail = async (email) => User.findOne({ where: { email } });

const getAllUsers = async () => User.findAll();

const getUserByPk = async (id) => User.findByPk(id);

module.exports = {
  createNewUser,
  getUserByEmail,
  getAllUsers,
  getUserByPk,
};