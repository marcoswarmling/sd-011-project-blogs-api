const { User } = require('../models');
const errors = require('../schemas/errors');
const { createToken } = require('../helpers/jwt');

const getByEmail = async (email) => {
  const user = User.findOne({ where: { email } });

  return user;
};

const createUserToken = ({ displayName, email }) => createToken({ displayName, email });

const create = async (user) => {
  const userExists = await getByEmail(user.email);

  if (userExists) throw errors.user.alreadyExists;

  const newUser = await User.create(user);

  return newUser;
};

const signin = async ({ email, password }) => {
  const user = await getByEmail(email);

  if (!user || user.password !== password) throw errors.login.invalidFields;

  const token = createUserToken(user);

  return token;
};

module.exports = { create, signin };