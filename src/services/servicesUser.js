const jwt = require('jsonwebtoken');
const { User } = require('../../models');
require('dotenv').config();

const emailExists = async (email) => {
  try {
    const userEmailExists = await User.findOne({ where: { email } });
    if (!userEmailExists) return false;

    return true;
  } catch (error) {
    console.log(error.message);
    return { message: 'Algo deu errado' };
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
    return { message: 'Algo deu errado' };
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
    return { message: 'Algo deu errado' };
  }
};

const allUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.log(error.message);
    return { message: 'Algo deu errado' };
  }
};

module.exports = {
  emailExists,
  createUser,
  loginUser,
  allUsers,
};
