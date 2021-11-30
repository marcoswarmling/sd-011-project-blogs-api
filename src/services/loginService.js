const { Users } = require('../models');
const errors = require('../schemas/errorMessage');

const getByEmail = async ({ email, password }) => {
  const user = await Users.findOne({ where: { email, password } });

  return user;
};

const login = async ({ email, password }) => {
  const userExists = await getByEmail({ email, password });

  if (!userExists || userExists === null) throw errors.login.notExistent;

  return true;
};

module.exports = {
  login,
};