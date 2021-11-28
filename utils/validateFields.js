const ApiError = require('./ApiError');

function verifyFieldExists(body) {
  const { email, password } = body;

  if (!email) return ApiError.requiredEmail;
  if (!password) return ApiError.requiredPassword;
  
  return false;
}

const validateEmailNotEmpty = (email) => {
  if (email.length === 0) return false;
  return true;
};

const validatePasswordNotEmpty = (password) => {
  if (password.length === 0) return false;
  return true;
};

const validatePasswordCorrectLength = (password) => {
  if (password.length !== 6) return false;
  return true;
};

const validateDisplayNameLength = (displayName) => {
  if (displayName.length < 8) return false;
  return true;
};

function verifyFieldLength(body) {
  const { displayName, email, password } = body;

  if (!validateEmailNotEmpty(email)) return ApiError.emptyEmail;
  if (!validatePasswordNotEmpty(password)) return ApiError.emptyPassword;
  if (!validatePasswordCorrectLength(password)) return ApiError.invalidPassword;
  if (!validateDisplayNameLength(displayName)) return ApiError.invalidDisplayName;

  return false;
}

function verifyEmailFormat(body) {
  const { email } = body;

    const EMAIL_REGEX = /\S+@\S+\.\S+/;
    const validEmail = EMAIL_REGEX.test(email);

    if (!validEmail) return ApiError.invalidEmail;

    return false;
}

module.exports = {
  verifyFieldLength,
  verifyFieldExists,
  verifyEmailFormat,
  validateEmailNotEmpty,
};
