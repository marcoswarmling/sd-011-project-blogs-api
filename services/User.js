const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { userError } = require('../utils/errorSchema');

const jwtSecret = process.env.JWT_SECRET || 'secret';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = ({ id, email }) => jwt.sign({ id, email }, jwtSecret, jwtConfig);

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

const createUser = async (user) => {
  const existingUser = await findByEmail(user.email);

  if (existingUser) throw userError.alreadyExists;

  const newUser = await User.create(user);

  const token = generateToken(newUser);

  return token;
};

const login = async (email, password) => {
  const user = await findByEmail(email);

  if (!user || user.password !== password) throw userError.invalidFields;

  const token = generateToken(user);

  return token;
};

const getAllUsers = async () => {
  const users = await User.findAll();

  return users;
};

module.exports = {
  createUser,
  login,
  getAllUsers,
};
