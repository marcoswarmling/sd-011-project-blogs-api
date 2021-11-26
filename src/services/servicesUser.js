const jwt = require('jsonwebtoken');
const { User } = require('../../models');
require('dotenv').config();

const errorMessage = 'Algo deu errado';

const emailExists = async (email) => {
  try {
    const userEmailExists = await User.findOne({ where: { email } });
    if (!userEmailExists) return false;

    return true;
  } catch (error) {
    console.log(error.message);
    return { errorMessage };
  }
};

const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ where: { email, password } });

    if (!user) {
      return { message: 'usuário ou senha não conferem' };
    }

    const { dataValues: { password: pass, image, ...jwtData } } = user;

    const newToken = jwt.sign(jwtData, process.env.JWT_SECRET);

    return { token: newToken };
  } catch (error) {
    console.log(error.message);
    return { errorMessage };
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
    return { errorMessage };
  }
};

const allUsers = async () => {
  try {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
  } catch (error) {
    console.log(error.message);
    return { errorMessage };
  }
};

const getById = async (id) => {
  try {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!user) return { message: 'User does not exist' };
    return user;
  } catch (e) {
    console.log(e.message);
    return { errorMessage };
  }
};

module.exports = {
  emailExists,
  createUser,
  loginUser,
  allUsers,
  getById,
};
