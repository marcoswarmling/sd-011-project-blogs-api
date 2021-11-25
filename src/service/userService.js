const { User } = require('../../models');

const createUser = async (email, displayName, password, image) => {
  const newUser = await User.create({ email, displayName, password, image });

  return newUser;
};

const getAllUsers = async () => {
  const newUser = await User.findAll();

  return newUser;
};

const getUserById = async (id) => {
  const newUser = await User.findOne({ where: { id } });

  return newUser;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
