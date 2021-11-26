const { User } = require('../models');
const errors = require('../schemas/errorsSchema');
const { createToken } = require('../helpers/jwt');

const getByEmail = async (email) => {
  const user = User.findOne({ where: { email } });

  return user;
};

const createUserToken = ({ id, displayName, email }) => createToken({ id, displayName, email });

const create = async (user) => {
  const userExists = await getByEmail(user.email);

  if (userExists) throw errors.user.alreadyExists;

  const newUser = await User.create(user);

  const token = createUserToken(newUser);

  return token;
};

const signin = async ({ email, password }) => {
  const user = await getByEmail(email);

  if (!user || user.password !== password) throw errors.login.invalidFields;

  const token = createUserToken(user);

  return token;
};

const getAll = async () => {
  const users = await User.findAll();

  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id);

  if (!user) throw errors.user.notFound;

  return user;
};

module.exports = { create, signin, getAll, getById };
