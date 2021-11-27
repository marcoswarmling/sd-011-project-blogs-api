// const REGEX_VALID_EMAIL = /^\w+@\w[^]+\.com(\.br)?$/;

// function isValidUser({ name, email, password }) {
//   if (!name || !password || !email) return false;
//   if (!REGEX_VALID_EMAIL.test(email)) return false;
// }

// function isUniqueEmail(user) {
//   if (user && user.email) return false;
// }

// function isValidLogin({ email, password }) {
//   if (!email || !password) return false;
//   if (!REGEX_VALID_EMAIL.test(email)) return false;
// }

// function isValidPAssword({ role, password }, ReqPassword) {
//   if (role !== 'admin' && ReqPassword.length < 7) return false;
//   if (password !== ReqPassword) return false;
// }
const ROLES = {
  minNameLengh: 8,
  validEmailRegex: /^\w+@\w[^]+\.com(\.br)?$/,
};

function isValidNameLength(displayName) {
  const isValid = (displayName.length >= ROLES.minNameLengh);
  return isValid;
}

function isValidEmail(email) {
  return (ROLES.validEmailRegex.test(email));
}

module.exports = {
  isValidNameLength,
  isValidEmail,
};
