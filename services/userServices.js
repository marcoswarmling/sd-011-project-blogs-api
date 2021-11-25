const { User } = require('../models');

const getAll = async () => {
  try {
    const allUsers = await User.findAll();
    return allUsers;
  } catch (e) {
    console.log(e.message);
  }
};

const createUser = async (displayName, email, password, image) => {
  try {
    const createResponse = await User.create({ displayName, email, password, image });
    return createResponse;
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  getAll,
  createUser,
};
