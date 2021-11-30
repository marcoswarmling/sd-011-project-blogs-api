const { User } = require('../models');

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

module.exports = {
  registerUser,
  searchAllUsers,
};