const jwt = require('jsonwebtoken');
const { User } = require('../../models');
require('dotenv').config();

const emailExists = async (email) => {
  try {
    const userEmailExists = await User.findOne({ where: { email } });
    if (!userEmailExists) return false;
    return true;
  } catch (error) {
    return error.message;
  }
};

const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ 
      where: { email, password }, 
      attributes: { exclude: ['password', 'image'] }, 
    });

    if (!user) {
      return { message: 'usuário ou senha não conferem' };
    }

    const jwtData = user.dataValues;

    const newToken = jwt.sign(jwtData, process.env.JWT_SECRET);

    return { token: newToken };
  } catch (error) {
    return error.message;
  }
};

const createUser = async (items) => {
  try {
    const newUser = await User.create(items);
    if (!newUser) {
      return { message: 'erro na criação do usuário' };
    }
    const { email, password } = items;
    const token = await loginUser(email, password);
    return token;
  } catch (error) {
    return error.message;
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
  } catch (error) {
    return error.message;
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    return user;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  emailExists,
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
};