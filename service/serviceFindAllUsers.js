const { Users } = require('../models');

const serviceFindAllUsers = async () => {
  const users = await Users.findAll();
  return users;
};

module.exports = serviceFindAllUsers;
