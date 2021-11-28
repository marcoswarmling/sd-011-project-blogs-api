const { User } = require('../models');

async function getUserByEmail(email) {
  const emailExists = await User.findOne({ where: { email } });
  return emailExists;
}

async function createUserInDB(user) {
  const emailExists = await User.create(user);
  console.log(emailExists);

  return true;
}

module.exports = {
  getUserByEmail,
  createUserInDB,
};
