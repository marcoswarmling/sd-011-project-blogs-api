const { Users } = require('../models');

const findUserByEmail = async (email) => Users.findOne({ where: { email }, raw: true });

const createUser = async (displayName, email, password, image) => Users.create({
  displayName, email, password, image,
});

module.exports = {
  findUserByEmail,
  createUser,
};
