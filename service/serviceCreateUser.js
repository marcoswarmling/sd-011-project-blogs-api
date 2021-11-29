const { Users } = require('../models/');
const jwt = require('jsonwebtoken');

const secret = 'babalu';
// const idKey = 'id';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const serviceCreateUser = async (userData) => {
  const newUser = await Users.create({ ...userData });
  const token = jwt.sign({ ...newUser }, secret, jwtConfig);
  return token;
};

module.exports = serviceCreateUser;
