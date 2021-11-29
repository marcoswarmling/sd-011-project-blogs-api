const jwt = require('jsonwebtoken');
const { User } = require('../models');

require('dotenv').config();

const secret = process.env.JWT_SECRET;

const createToken = async (email) => {
  const result = await User.findOne({ where: { email } });
  if (!result) return { message: 'The email field not to be empty' };

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const { id } = result.dataValues;

  const data = {
    email,
    id,
  };
  
  const token = jwt.sign({ data }, secret, jwtConfig);
  return token;
};

module.exports = { createToken };
