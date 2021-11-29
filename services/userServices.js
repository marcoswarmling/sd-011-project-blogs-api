const { Users } = require('../models');

const createdUser = async (user) => {
  const result = await Users.create(user);
  return result;
};

const getAllUsers = async () => {
  const getUsers = await Users.findAll();

  return getUsers;
};

module.exports = {
  createdUser,
  getAllUsers,
};