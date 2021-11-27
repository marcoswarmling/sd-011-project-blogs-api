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

module.exports = {
  createUser,
};