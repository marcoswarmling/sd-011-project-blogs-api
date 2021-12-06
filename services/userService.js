const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const generateToken = (user, email) => {
  const secret = process.env.JWT_SECRET || 'secret';
  const jwtConfig = {
    expiresIn: '8h',
    algorithm: 'HS256',
  };
  const { id } = user;
  const userInfo = { id, email };
  const token = jwt.sign({ data: userInfo }, secret, jwtConfig);
  return { token };
};

const verifyName = (displayName) => {
  if (displayName.length < 8) {
    return {
      err: { code: 400,
        message: '"displayName" length must be at least 8 characters long',
       },
    };
  }
};

const verifyPassword = (password) => {
  if (password.length < 6) {
    return {
      err: { code: 400,
        message: '"password" length must be 6 characters long',
      },
    };
  }
};

const verifyInfo = async (email, password, displayName) => {
  const regexEmail = /\S+@\S+\.\S+/;
  if (!email) {
    return { err: { code: 400, message: '"email" is required' } };
  }
  if (!password) {
    return { err: { code: 400, message: '"password" is required' } };
  }
  if (!displayName) {
    return { err: { code: 400, message: '"displayName" is required' } };
  }
  if (!regexEmail.test(email)) {
    return { err: { code: 400, message: '"email" must be a valid email' } };
  }
};

const verifyLogin = (email, password) => {
  if (email === '') {
    return { err: { code: 400, message: { message: '"email" is not allowed to be empty' } } };
  }
  if (!email) {
    return { err: { code: 400, message: { message: '"email" is required' } } };
  }
  if (password === '') {
    return { err: { code: 400, message: { message: '"password" is not allowed to be empty' } } };
  }
  if (!password) {
    return { err: { code: 400, message: { message: '"password" is required' } } };
  }
};

const login = async ({ email, password }) => {
  if (verifyLogin(email, password)) return verifyLogin(email, password);
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    return { err: { code: 400, message: { message: 'Invalid fields' } } };
  }
  const token = generateToken(user, email);
  return token;
};

const createUser = async ({ email, password, displayName, image }) => {
  if (await verifyInfo(email, password, displayName)) {
    return verifyInfo(email, password, displayName);
  }
  if (verifyName(displayName)) return verifyName(displayName);
  if (verifyPassword(password)) return verifyPassword(password);
  const emailExists = await User.findOne({ where: { email } });
  if (emailExists) return { err: { code: 409, message: 'User already registered' } };
  const user = await User.create({ email, password, displayName, image });
  const token = generateToken(user, email);
  return token;
};

const getUsers = async () => {
  const users = User.findAll();
  return users;
};

module.exports = { createUser, login, getUsers };