const jwt = require('jsonwebtoken');
const { User } = require('../models');

const userValidate = async (displayName, email, password, image) => {
  const userDb = await User.findOne({ where: { email } });

  if (userDb) return ({ message: 'User already registered' });

  const register = await User.create({ displayName, email, password, image });
  return register;
};

const loginValidate = async (email, password) => {
  const userDb = await User.findOne({ where: { email, password } });

  if (!userDb) return ({ message: 'Invalid fields' });

  const createJWT = jwt.sign({
    id: userDb.id,
    email: userDb.email,
    password: userDb.password,
  }, process.env.JWT_SECRET);

  return { token: createJWT };
};

const getUsers = async () => {
  const usersDB = await User.findAll();

  if (!usersDB) return ({ message: 'Token not found' });

  return usersDB;
};

const getUserByID = async (id) => {
  const userID = await User.findOne({ where: { id } });

  if (!userID) return ({ message: 'User does not exist' });

  return userID;
};

// test

module.exports = {
  userValidate,
  loginValidate,
  getUsers,
  getUserByID,
};