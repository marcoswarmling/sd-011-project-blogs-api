const { User } = require('../models');

const createUser = async (userData) => {
  const newUser = await User.create({ ...userData });
  console.log(newUser);
  return newUser;
};

module.exports = {
  createUser,
};
