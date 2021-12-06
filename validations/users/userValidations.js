const errors = require('./errors');

const isNotValidDisplayName = (displayName) => {
  const { displayNameLength } = errors;

  if (displayName.length < 8) return displayNameLength;
};

const isNotValidEmail = (email) => {
  const { missingEmail, invalidEmailFormat } = errors;

  if (!email) return missingEmail;
  const emailRegex = new RegExp(
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
  );
  if (!emailRegex.test(email)) return invalidEmailFormat;
};

const isNotValidPassword = (password) => {
  const { missingPassword, passwordLength } = errors;

  if (!password) return missingPassword;
  if (password.length < 6) return passwordLength;
};

const validateUser = (displayName, email, password) => {
  if (isNotValidDisplayName(displayName)) return isNotValidDisplayName(displayName);
  if (isNotValidEmail(email)) return isNotValidEmail(email);
  if (isNotValidPassword(password)) return isNotValidPassword(password);
};

module.exports = {
  validateUser,
};
