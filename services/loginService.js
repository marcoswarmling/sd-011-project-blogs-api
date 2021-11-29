const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const createToken = async (email, password) => {
  const result = await User.findOne({ where: { email, password } });
  if (!result || !password) return { status: 400, message: 'Invalid fields' };
  
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const data = {
    email,
  };

  const token = jwt.sign({ data }, SECRET, jwtConfig);
  return { status: 200, token };
};

module.exports = {
  createToken,
};