const { User } = require('../../models');

const createUser = async (email, displayName, password, image) => {
  const newUser = await User.create({ email, displayName, password, image });

  return newUser;
};

module.exports = {
  createUser,
};
