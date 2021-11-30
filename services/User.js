const { User } = require('../models');
const { userError } = require('../utils/errorSchema');

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

const createUser = async (user) => {
  const existingUser = await findByEmail(user.email);

  if (existingUser) throw userError.alreadyExists;

  const newUser = await User.create(user);

  return newUser;
};

module.exports = {
  createUser,
};
