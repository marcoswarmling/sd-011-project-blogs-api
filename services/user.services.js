const { User } = require('../models');

async function getUserByEmail(email) {
  const emailExists = await User.findOne({ where: { email } });
  return emailExists;
}

async function getUserById(id) {
  const user = await User.findOne({ where: { id } });
  return user;
}

async function createUserInDB(user) {
  const createdUser = await User.create(user);
  return createdUser;
}

async function getAllUsersInDB() {
  const user = await User.findAll();
  return user;
}

module.exports = {
  getUserByEmail,
  createUserInDB,
  getAllUsersInDB,
  getUserById,
};
