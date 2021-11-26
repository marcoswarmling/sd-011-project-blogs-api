const { User } = require('../models');
const {
  verifyDisplayName,
  verifyEmail,
  verifyPassword,
  verifyIfEmailIsAlreadyUsed,
} = require('../validations/user');
const { createToken } = require('../middleware/token');

const createNewUser = async (displayName, email, password, image) => {
  const isValidDisplayName = verifyDisplayName(displayName);
  const isValidEmail = verifyEmail(email);
  const isValidPassword = verifyPassword(password);
  const alreadyExists = await verifyIfEmailIsAlreadyUsed(email);

  if (isValidDisplayName) return isValidDisplayName;
  if (isValidEmail) return isValidEmail;
  if (isValidPassword) return isValidPassword;
  if (alreadyExists) return alreadyExists;

  const data = { displayName, email, password, image };

  await User.create(data);
  return createToken(data);
};

const getAllUser = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

module.exports = {
  createNewUser,
  getAllUser,
};