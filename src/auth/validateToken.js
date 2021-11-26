const jwt = require('jsonwebtoken');

const { User } = require('../models');

require('dotenv').config();

const secret = process.env.JWT_SECRET;

const validateToken = async (token) => {
  const { data } = jwt.verify(token, secret);
  const email = data.userEmail;

  try {
    const findUser = await User.findAll({ where: { email } });
    if (!findUser) return false;
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = { validateToken };