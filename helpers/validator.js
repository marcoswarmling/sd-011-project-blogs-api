const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidDisplayName = ({ displayName }) => {
  if (typeof displayName !== 'string' || displayName.length <= 8) {
    throw new Error('"displayName" length must be at least 8 characters long');
  }
};

const isEmailExists = (user) => {
  if (!user.email) {
    throw new Error('"email" is required');
  }
};

const isPasswordExists = (user) => {
  if (!user.password) {
    throw new Error('"password" is required');
  }
};

const isValidEmail = ({ email }, regex) => {
  if (!regex.test(email)) {
    throw new Error('"email" must be a valid email');
  }
};

const isValidPassword = ({ password }) => {
  if (password.length !== 6) {
    throw new Error('"password" length must be 6 characters long');
  }
};

const validator = (user) => {
  isValidDisplayName(user);
  isEmailExists(user);
  isValidEmail(user, regexEmail);
  isPasswordExists(user);
  isValidPassword(user);
};

module.exports = validator;