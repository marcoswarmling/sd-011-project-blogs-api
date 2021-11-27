const { Users } = require('../models');

const createdUser = async (user) => {
  const result = await Users.create(user);
  return result;
};

module.exports = {
  createdUser,
};