const User = require('');

const createUser = async ({ name, email, password }) => {
  const newUser = await User.createUser({ name, email, password });

  return newUser;
};

module.exports = {
  createUser,
};