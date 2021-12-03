const { User } = require('../models');
const err = require('../helpers/errors');

const registerUser = async (displayName, email, password, image) => {
  const result = await User.create(
    { displayName, email, password, image },
  );

  return result;
};

const searchAllUsers = async () => {
  const result = await User.findAll();

  return result;
};

const searchUser = async (id) => {
  const result = await User.findByPk(id);

  if (!result) return { err: err.userNotFound };

  return result;
};

const deleteUser = async (id) => {
  const result = await User.destroy({ where: { id } });

  return result;
};

module.exports = {
  registerUser,
  searchAllUsers,
  searchUser,
  deleteUser,
};