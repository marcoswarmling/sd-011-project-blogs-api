const { User } = require('../models');
const getToken = require('../auth/authenticateToken');

const createUser = async (userData) => {
  const existingUser = await User.findOne({ where: { email: userData.email } });

  if (existingUser) return { code: 'alreadyExists', message: 'User already registered' };

  const newUser = await User.create({ ...userData });

  return getToken(newUser.dataValues);
};

module.exports = {
  createUser,
};
