const { Users } = require('../models');

const findUserByEmail = async (email) => Users.findOne({ where: { email }, raw: true });

const create = async ({ displayName, email, password, image }) => Users.create({
  displayName, email, password, image,
});

const findAll = async () => Users.findAll({ raw: true });

module.exports = {
  findUserByEmail,
  create,
  findAll,
};
