const { User } = require('../models');

const getUserByCredentials = async (email, password) => {
  const findUser = await User.findOne({ where: { email, password } });
  return findUser;
};

module.exports = {
  getUserByCredentials,
};