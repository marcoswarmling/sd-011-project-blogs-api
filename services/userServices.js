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
  console.log(displayName.length);
  console.log(typeof displayName);
  if (displayName.length < 8 || typeof displayName !== 'string') {
    return { message: 'O nome deve ter no mínimo 8 caracteres...' };
  }
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
