const JWT = require('jsonwebtoken');
const { Users } = require('../models');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '15d',
  algorithm: 'HS256',
};

const getUserEmail = async (email) => {
  const user = await Users.findOne({ where: { email } });
  return user;
};

const createLogin = async (email, password) => {
  const userExist = await getUserEmail(email);
  console.log(userExist, 'USUARIO EXISTE');
  if (!userExist || userExist.password !== password) {
    return { msgError: 'MESSAGE_ERROR' };
  }

  const userWithoutPassword = {
    email,
  };

  const token = JWT.sign({ data: userWithoutPassword }, SECRET, jwtConfig);
  console.log(token, 'TOKEN-SERVICES');
  return token;
};

module.exports = {
  createLogin,
};