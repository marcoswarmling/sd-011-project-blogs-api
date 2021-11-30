const { userError } = require('../utils/errorSchema');

const validateDisplayName = (name) => {
  if (!name || name.length < 8) return userError.invalidDisplayName;
};

const validateEmail = (email) => {
  if (!email) return userError.requiredEmail;
  
  const emailRegex = /[\w\d.+_-]+@[\w]+.com/;
  const check = emailRegex.test(email);

  if (!check) return userError.invalidEmail;
};

const validatePassword = (password) => {
  if (!password) return userError.requiredPassword;
  if (password.length < 6) return userError.invalidPassword;
};

module.exports = async (req, _res, next) => {
  const { displayName, email, password } = req.body;

  const invalidName = validateDisplayName(displayName);
  if (invalidName) return next(invalidName);

  const invalidEmail = validateEmail(email);
  if (invalidEmail) return next(invalidEmail);
  
  const invalidPassword = validatePassword(password);
  if (invalidPassword) return next(invalidPassword);

  next();
};