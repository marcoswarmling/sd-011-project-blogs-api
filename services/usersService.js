const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const create = async ({ displayName, email, password, image }) => {
  await Users.create({ displayName, email, password, image });

  const secret = 'senha';

  const payload = {
    email,
    password,
  };

  const token = jwt.sign(payload, secret, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });

  return { token };
};

const login = async ({ email, password }) => {
  const secret = 'senha';

  const payload = {
    email,
    password,
  };

  const token = jwt.sign(payload, secret, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });

  return { token };
};

module.exports = {
  create,
  login,
};
