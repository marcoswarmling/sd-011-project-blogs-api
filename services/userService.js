const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const createUser = async (displayName, email, password, image) => {
  await User.create({ displayName, email, password, image });

  const token = jwt.sign({ user: { displayName, email } }, JWT_SECRET);

  return token;
};

const loginUser = async (email, password) => {
  const { displayName } = await User.findOne({ where: { email, password } });

  const token = jwt.sign({ user: { displayName, email } }, JWT_SECRET);

  return token;
};

module.exports = {
  createUser,
  loginUser,
};
