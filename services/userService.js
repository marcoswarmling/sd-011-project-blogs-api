const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {

  const response = await User.create({ displayName, email, password, image });

  return response;
};

module.exports = {
  createUser,
};