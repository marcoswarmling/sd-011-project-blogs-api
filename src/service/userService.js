const { User } = require('../../models');

const createdUser = async (user) => {
  const result = await User.create(user);
  return result;
};

const getUser = async () => {
  const result = await User.findAll();
  return result;
};

const getUserId = async (id) => {
  const result = await User.findByPk(id);
  return result;
};

module.exports = {
  createdUser,
  getUser,
  getUserId,
};