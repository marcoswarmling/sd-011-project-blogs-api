const { userError } = require('../utils/errorSchema');

const validateDisplayName = (name) => {
  if (!name || name.length < 8) return userError.invalidDisplayName;
};

const validateEmail = (email) => {
  if (email === '') return userError.emptyEmail;
  if (!email) return userError.requiredEmail;
  
  const emailRegex = /[\w\d.+_-]+@[\w]+.com/;
  const check = emailRegex.test(email);

  if (!check) return userError.invalidEmail;
};

const validatePassword = (password) => {
  if (password === '') return userError.emptyPassword;
  if (!password) return userError.requiredPassword;
  if (password.length < 6) return userError.invalidPassword;
};

const validateNewUser = async (req, _res, next) => {
  const { displayName, email, password } = req.body;

  const invalidName = validateDisplayName(displayName);
  if (invalidName) return next(invalidName);

  const invalidEmail = validateEmail(email);
  if (invalidEmail) return next(invalidEmail);
  
  const invalidPassword = validatePassword(password);
  if (invalidPassword) return next(invalidPassword);

  next();
};

const validateLogin = async (req, _res, next) => {
  const { email, password } = req.body;

  const invalidEmail = validateEmail(email);
  if (invalidEmail) return next(invalidEmail);

  const invalidPassword = validatePassword(password);
  if (invalidPassword) return next(invalidPassword);

  next();
};

module.exports = {
  validateNewUser,
  validateLogin,
};
