const ApiError = require('./ApiError');

function verifyFieldExists(body) {
  const { email, password } = body;

  if (!email) return ApiError.requiredEmail;
  if (!password) return ApiError.requiredPassword;
}

const validateEmailNotEmpty = (email) => {
  if (email === '') return false;
  return true;
};

const validatePasswordNotEmpty = (password) => {
  if (password.length === '') return false;
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

function validatePostFields(body) {
  const { title, content, categoryIds } = body;

  if (!title) return ApiError.requiredTitle;
  if (!content) return ApiError.requiredContent;
  if (!categoryIds) return ApiError.requiredCategoryIds;

  return false;
}

module.exports = {
  verifyFieldLength,
  verifyFieldExists,
  verifyEmailFormat,
  validateEmailNotEmpty,
  validatePostFields,
};
