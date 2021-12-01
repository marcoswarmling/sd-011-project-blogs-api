const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createUser = async (name, email, password, image) => {
  const user = await User.create({ name, email, password, image });

  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return token;
};

module.exports = {
  createUser,
};
