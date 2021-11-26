const JWT = require('jsonwebtoken');
const { Users } = require('../models');

const SECRET = process.env.JWT_SECRET;
console.log(SECRET, 'SECRET DO LOGIN');

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
  if (!userExist || userExist.password !== password) {
    return { msgError: 'msgError' };
  }

  const userWithoutPassword = {
    email,
  };

  const token = JWT.sign({ data: userWithoutPassword }, SECRET, jwtConfig);
  return token;
};

module.exports = {
  createLogin,
};