const { User } = require('../models');

const createdUser = async (user) => {
  const result = await User.create(user);
  return result;
};

module.exports = {
  createdUser,
};