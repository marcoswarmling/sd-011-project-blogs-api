const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();

const jwtConfiguration = {
  expiresIn: '4h',
  algorithm: 'HS256',
};

const login = async (email, password) => {
  const userLogin = await Users.findOne({
    where: { email, password },
  });

  if (!userLogin) return false;

  const userId = userLogin.dataValues.id;
  
  console.log('userId', userId);

  const token = jwt.sign({ 
    data: { 
      email, 
      password, 
      userId } }, process.env.JWT_SECRET, jwtConfiguration);

  return token;
};

module.exports = {
  login,
};
