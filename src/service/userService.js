const { User } = require('../../models');

const createdUser = async (user) => {
  const result = await User.create(user);
  return result;
};

const getUser = async () => {
  const result = await User.findAll();
  return result;
};

module.exports = {
  createdUser,
  getUser,
};