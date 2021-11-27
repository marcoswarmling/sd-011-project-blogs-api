const jwt = require('jsonwebtoken');

const { User } = require('../models');

const jwtSecret = process.env.JWT_SECRET;

const generateToken = (email, id) => {
  const payload = {
    id,
    email,
  };
  
  return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
};

const createUser = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({ displayName, email, password, image });

  const token = generateToken(email, newUser.id);

  return token;
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) throw new Error('INVALID_FIELDS');

  const token = generateToken(user.email, user.id);

  return token;
};

const getAllUsers = async () => {
  const users = await User.findAll();

  return users;
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id } });

  if (!user) throw new Error('INEXISTENT_USER');

  return user;
};

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
};