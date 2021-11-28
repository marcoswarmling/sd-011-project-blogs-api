require('dotenv').config();

const { User } = require('../models');

async function getUserByEmail(email) {
  const emailExists = await User.findOne({ where: { email } });
  return emailExists;
}

async function createUserInDB(user) {
  await User.create(user);
  return true;
}

module.exports = {
  getUserByEmail,
  createUserInDB,
};
