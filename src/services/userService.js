const { User } = require('../../models');
// const {} = require('../helpers/index');

const createUser = async ({ displayName, email, password, image }) => {
  await User.create({ displayName, email, password, image });
};

const getUserByEmail = async (email) => {
  const findUser = await User.findOne({ where: { email } });
  // console.log(email);
  return findUser;
};

module.exports = {
  createUser,
  getUserByEmail,
};