const ApiError = require('./ApiError');

function verifyFieldExists(body) {
  const { email, password } = body;

  if (!email) return ApiError.requiredEmail;
  if (!password) return ApiError.requiredPassword;
  
  return false;
}

function verifyFieldLength(body) {
  const { displayName, email, password } = body;

  if (email.length === 0) return ApiError.emptyEmail;
  if (password.length === 0) return ApiError.emptyPassword;
  if (password.length !== 6) return ApiError.invalidPassword;
  if (displayName.length < 8) return ApiError.invalidDisplayName;

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
};
