const { createToken } = require('../middleware/token');

const {
  verifyEmail,
  verifyPassword,
  verifyIfEmailIsAlreadyUsed } = require('../validations/login');

const getLogIn = async (userEmail, userPassword) => {
  const isValidEmail = verifyEmail(userEmail);
  const isValidPassword = verifyPassword(userPassword);

  if (isValidEmail) return isValidEmail;
  if (isValidPassword) return isValidPassword;

  const findUser = await verifyIfEmailIsAlreadyUsed(
    userEmail, userPassword,
  );

  if (findUser.err) return findUser;

  const { displayName, email, password, image } = findUser;

  return createToken({ displayName, email, password, image });
};

module.exports = {
  getLogIn,
};
