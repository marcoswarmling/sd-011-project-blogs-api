const { User } = require('../models');
const errors = require('../schemas/errorsSchema');

const getByEmail = async (email) => {
  const user = User.findOne({ where: { email } });

  return user;
};

const create = async (user) => {
  const userExists = await getByEmail(user.email);

  if (userExists) throw errors.user.alreadyExists;

  const newUser = await User.create(user);

  return newUser;
};

module.exports = { create };
