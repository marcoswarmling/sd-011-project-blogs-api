const { Users } = require('../models');
const createAuthentication = require('../middlewares/auth/auth');

const createLogin = async ({ email, password }) => {
  const checkUser = await Users.findAll();
  const dataUser = { email, password, id: checkUser.id };
  const token = await createAuthentication(dataUser);
  return token;
};

module.exports = { createLogin };
