const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

function getToken(email, id) {
  const payload = {
    id,
    email,
  };
  return jwt.sign(payload, secret);
}

async function createUser(userObj) {
  const { displayName, email, password, image } = userObj;

  const checkUserExistis = await User.findOne({ where: { email } });
  
  if (checkUserExistis) {
    const err = JSON.stringify({ status: 409, message: 'User already registered' });
    throw new Error(err);
  }
  const newUser = await User.create({ displayName, email, password, image });

  const token = getToken(email, newUser.id);

  return token;
}

async function userLogin(loginObj) {
  const { email, password } = loginObj;

  const checkUserLogin = await User.findOne({ where: { email, password } });

  if (!checkUserLogin) {
    const err = JSON.stringify({ status: 400, message: 'Invalid fields' });
    throw new Error(err);
  }
  const token = getToken(email, checkUserLogin.id);

  return token;
}

async function getAllUsers() {
  const result = await User.findAll();
  return result;
}

async function getUserById(id) {
  const result = await User.findOne({ where: { id } });
  if (!result) {
    const err = JSON.stringify({ status: 404, message: 'User does not exist' });
    throw new Error(err);
  }
  return result;
}

module.exports = {
  createUser,
  userLogin,
  getAllUsers,
  getUserById,
};