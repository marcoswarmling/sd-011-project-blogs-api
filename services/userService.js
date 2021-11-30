const { User } = require('../models');
const getToken = require('../auth/authenticateToken');

const createUser = async (userData) => {
  const newUser = await User.create({ ...userData });
  console.log(newUser.User.dataValues);
  return getToken(newUser.User.dataValues);
};

module.exports = {
  createUser,
};
