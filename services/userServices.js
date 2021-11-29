const { Users } = require('../models');

const findUserByEmail = async (email) => Users.findOne({ where: { email } });

const create = async ({ displayName, email, password, image }) => Users.create({
  displayName, email, password, image,
});

module.exports = {
  findUserByEmail,
  create,
};
