const jwt = require('jsonwebtoken');
const { User } = require('../models');

const generateToken = (user, email) => {
  const secret = 'secret';
  const jwtConfig = {
    expiresIn: '8h',
    algorithm: 'HS256',
  };
  const { id } = user;
  const userInfoToken = { id, email };
  const token = jwt.sign({ data: userInfoToken }, secret, jwtConfig);
  return { token };
};

const verifyDisplayName = (displayName) => {
  if (displayName.length < 8) {
    return { err: 
      { code: 400,
        message: { message: '"displayName" length must be at least 8 characters long' } } };
  }
};

const verifyPassword = (password) => {
  if (password.length < 6) {
    return { err: 
      { code: 400,
        message: { message: '"password" length must be 6 characters long' } } };
  }
};

const verifyUserInfo = async (email, password, displayName) => {
  const validEmail = /\S+@\S+\.\S+/;
  if (!email) {
    return { err: { code: 400, message: { message: '"email" is required' } } };
  }
  if (!password) {
    return { err: { code: 400, message: { message: '"password" is required' } } };
  }
  if (!displayName) {
    return { err: { code: 400, message: { message: '"displayName" is required' } } };
  }
  if (!validEmail.test(email)) {
    return { err: { code: 400, message: { message: '"email" must be a valid email' } } };
  }
};

const createUser = async ({ email, password, displayName, image }) => {
  if (await verifyUserInfo(email, password, displayName)) {
    return verifyUserInfo(email, password, displayName);
  }
  if (verifyDisplayName(displayName)) return verifyDisplayName(displayName);
  if (verifyPassword(password)) return verifyPassword(password);
  const emailExists = await User.findOne({ where: { email } });
  if (emailExists) return { err: { code: 409, message: { message: 'User already registered' } } };
  const user = await User.create({ email, password, displayName, image });
  const token = generateToken(user, email);
  return token;
};

module.exports = { createUser };