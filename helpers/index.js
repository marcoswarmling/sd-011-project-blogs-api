const ROLES = {
  minNameLengh: 8,
  passwordLengh: 6,
  validEmailRegex: new RegExp('\\S+@\\S+\\.\\S+'),
};

function isValidNameLength(displayName) {
  const isValid = (displayName.length >= ROLES.minNameLengh);
  return isValid;
}

function isValidEmail(email) {
  return (ROLES.validEmailRegex.test(email));
}

function isValidPassword(password) {
  return (password.length === ROLES.passwordLengh);
}

module.exports = {
  isValidNameLength,
  isValidEmail,
  isValidPassword,
};
