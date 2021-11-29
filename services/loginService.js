const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const createToken = async (email) => {
  const userEmail = await User.findOne({ where: { email } });  
  
  if (!userEmail) {
    return ({ message: 'email not empty' });
  }
  
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  }; 

  const { id } = userEmail.dataValues;

  const dataToken = { 
    id,
    email,
  };

  const token = jwt.sign({ dataToken }, secret, jwtConfig);
  return token;
};

module.exports = { createToken };
