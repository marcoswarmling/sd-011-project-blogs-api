const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const loginUser = async (email, password) => {
  const { displayName } = await User.findOne({ where: { email, password } });

  const token = jwt.sign({ user: { displayName, email } }, JWT_SECRET);

  return token;
};

module.exports = { loginUser };