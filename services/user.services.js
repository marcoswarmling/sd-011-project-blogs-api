// const { user } = require('../models');

async function getUserByEmail(email) {
  // console.log('chegou:', email);
  // const emailExists = await User.findAll();
  // console.log(emailExists);
  // return emailExists;
  return email;
}

function createUserInDB() {
  // código
}

module.exports = {
  getUserByEmail,
  createUserInDB,
};
