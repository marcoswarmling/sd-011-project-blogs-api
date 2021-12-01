const { Users } = require('../models');
const responseToken = require('../auth/jwtFunctions');

const createUser = async ({ displayName, email, password, image }) => {
  await Users.create({ displayName, email, password, image });
  const newToken = responseToken.create(email);
  return newToken;
};

const createLogin = async ({ email, password }) => {
  await Users.findOne({ where: { email, password } });
  const validateTokenUser = responseToken.create(email);
  return validateTokenUser;
};

const getUsers = async () => {
  const allUsers = await Users.findAll();
  return allUsers;
};

const getUser = async (id) => {
  const userId = await Users.findByPk(id, { attributes: { exclude: ['password'] } });
  return userId;
};

module.exports = {
  createUser,
  createLogin,
  getUsers,
  getUser,
};
