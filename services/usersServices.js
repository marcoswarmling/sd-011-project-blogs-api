const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const jwtKey = process.env.JWT_SECRET;

const getUserByEmail = async (email) => User.findOne({ where: { email } });

const createUser = async (displayName, email, password, image) => {
  const userCreation = await User.create({ 
    displayName, 
    email, 
    password, 
    image,
  });
  const { id: userId } = userCreation.dataValues;
  const token = jwt.sign({ data: { userId, displayName, email } }, jwtKey);
  return token;
};

const getAllUsers = () => User.findAll();

const getUserById = async (id) => { 
  const user = await User.findOne({ where: { id } });
  if (!user) return { message: 'User does not exist' };
  return user;
};

module.exports = {
  getUserByEmail,
  getUserById,
  getAllUsers,
  createUser,
};