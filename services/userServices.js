const jwt = require('jsonwebtoken');
const { Users } = require('../models/index');

const secret = process.env.JWT_SECRET;
const jwtConfiguration = {
  expiresIn: '14d',
  algorithm: 'HS256',
};

const registerUser = async (displayName, email, password, image) => {
  const doesEmailExists = await Users.findOne({ where: { email } });

  if (doesEmailExists) throw new Error('User already registered');

  await Users.create({ displayName, email, password, image });

  const userWithoutPwd = {
    displayName,
    email,
  };
  const token = jwt.sign({ data: userWithoutPwd }, secret, jwtConfiguration);
  return token;
};

module.exports = {
  registerUser,
};
