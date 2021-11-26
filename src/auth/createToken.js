const jwt = require('jsonwebtoken');

const { User } = require('../models');

require('dotenv').config();

const secret = process.env.JWT_SECRET;

const jwtConfig = { algorithm: 'HS256' };

const createJwtToken = async (email, password) => {
  const [userByEmail] = await User.findAll({ where: { email } });
  if (!userByEmail) {
    return { code: 400, result: { message: 'Invalid fields' } };
  }
  const { dataValues } = userByEmail;

  if (dataValues.email !== email || dataValues.password !== password) {
    return { code: 400, result: { message: 'Invalid fields' } };
  }
  const userEmail = dataValues.email;
  const userPassword = dataValues.password;

  const token = jwt.sign({ data: { userEmail, userPassword } }, secret, jwtConfig);
  return { code: 200, result: { token } };
};

module.exports = { createJwtToken };