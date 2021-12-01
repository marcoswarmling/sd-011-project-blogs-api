const { User } = require('../../models');
// const {} = require('../helpers/index');

const createUser = async ({ displayName, email, password, image }) => {
  await User.create({ displayName, email, password, image });
};

const getUserByEmail = async ({ email }) => {
  await User.findOne({ where: { email } });
};

module.exports = {
  createUser,
  getUserByEmail,
};