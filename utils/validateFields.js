const ApiError = require('./ApiError');

function verifyFieldExists(body, next) {
  const { email, password } = body;

  if (!email) next(ApiError.requiredEmail());
  if (!password) next(ApiError.requiredPassword());
  
  return false;
}

function verifyFieldLength(body, next) {
  const { displayName, email, password } = body;

  if (email.lenght === 0) next(ApiError.emptyEmail());
  if (password.length === 0) next(ApiError.emptyPassword());
  if (password.length !== 6) next(ApiError.invalidPassword());
  if (displayName.length < 8) next(ApiError.invalidDisplayName());

  return false;
}

function verifyEmailFormat(body, next) {
  const { email } = body;

    const EMAIL_REGEX = /\S+@\S+\.\S+/;
    const validEmail = EMAIL_REGEX.test(email);

    if (!validEmail) next(ApiError.invalidEmail());

    return false;
}

module.exports = {
  verifyFieldLength,
  verifyFieldExists,
  verifyEmailFormat,
};
