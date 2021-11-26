const { status, usersMessages } = require('./status&messages');

/* ========== HELPERS FUNCIONTS ======================= */

const minLengthString = (attribute, length) => {
  if (attribute.length < length) return false;
  return true;
};

const lengthEqualTo = (attribute, number) => {
  const isEqual = attribute.length === number;
  if (!isEqual) return false;
  return true;
};

const isValidEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  if (!regex.test(email)) return false;
  return true;
};

/* ========== VALIDATION FUNCIONTS ======================= */

const displayNameValidation = (displayName) => {
  if (!minLengthString(displayName, 8)) {
    return { status: status.badRequest, message: usersMessages.displayName };
  }
  return false;
};

const emailValidation = (email) => {
  if (!email) {
    return { status: status.badRequest, message: usersMessages.emailRequired };
  }
  if (!isValidEmail(email)) {
    return { status: status.badRequest, message: usersMessages.email };
  }
  return false;
};

const passwordValidation = (password) => {
  if (!password) {
    return { status: status.badRequest, message: usersMessages.passwordRequired };
  }
  if (!lengthEqualTo(password, 6)) {
    return { status: status.badRequest, message: usersMessages.password }; 
  }
};

module.exports = { displayNameValidation, emailValidation, passwordValidation };
