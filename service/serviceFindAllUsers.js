const { Users } = require('../models');

const serviceFindAllUsers = async () => {
  const login = await Users.findAll();
  return login;
};

module.exports = serviceFindAllUsers;
