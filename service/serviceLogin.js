const { Users } = require('../models');
const jwt = require('jsonwebtoken');

const secret = 'babalu';
// const idKey = 'id';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const serviceLogin = async (email, password) => {
  const login = await Users.findOne({
    where: { email: email, password: password },
  });
  if (login === null) {
    return false;
  }
  const token = jwt.sign({ ...login }, secret, jwtConfig);
  return token;
};

module.exports = serviceLogin;
