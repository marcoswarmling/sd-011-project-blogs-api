const errors = {
  displayNameLength: {
    code: '400',
    message: '"displayName" length must be at least 8 characters long',
  },
  invalidEmailFormat: {
    code: '400',
    message: '"email" must be a valid email',
  },
  missingEmail: {
    code: '400',
    message: '"email" is required',
  },
  passwordLength: {
    code: '400',
    message: '"password" length must be 6 characters long',
  },
  missingPassword: {
    code: '400',
    message: '"password" is required',
  },
};

module.exports = errors;