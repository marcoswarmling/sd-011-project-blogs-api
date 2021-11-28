const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv/config');

const { SECRET } = process.env;

const createUser = async (displayName, email, password, image) => {
  try {
    await User.create({ displayName, email, password, image });

    const payload = { displayName, email };

    const token = jwt.sign(payload, SECRET);

    return { token };
  } catch (error) {
    return { status: 409, message: 'User already registered' };
  }
};

module.exports = {
  createUser,
};
