const { User } = require('../models');
const { validateUser, verifyIfEmailAlreadyRegistered } = require('../validators/userValidators');

const getAll = async () => {
  try {
    const allUsers = await User.findAll();
    return allUsers;
  } catch (e) {
    console.log(e.message);
  }
};

const createUser = async (displayName, email, password, image) => {
  const isValidUser = validateUser(displayName, email, password);
  if (isValidUser.type === 'error') {
    return isValidUser;
  }
  const emailAlreadyRegistered = await verifyIfEmailAlreadyRegistered(email);
  if (emailAlreadyRegistered.type === 'error') {
    return emailAlreadyRegistered;
  }
  try {
    const createResponse = await User.create({ displayName, email, password, image });
    return { type: 'success', payload: createResponse };
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  getAll,
  createUser,
};
