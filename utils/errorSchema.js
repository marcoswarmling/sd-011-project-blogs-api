const userError = {
  alreadyExists: {
    code: 409,
    message: 'User already registered',
  },
  invalidDisplayName: {
    code: 400,
    message: '"displayName" length must be at least 8 characters long',
  },
  invalidEmail: {
    code: 400,
    message: '"email" must be a valid email',
  },
  emptyEmail: {
    code: 400,
    message: '"email" is not allowed to be empty',
  },
  requiredEmail: {
    code: 400,
    message: '"email" is required',
  },
  invalidPassword: {
    code: 400,
    message: '"password" length must be 6 characters long',
  },
  emptyPassword: {
    code: 400,
    message: '"password" is not allowed to be empty',
  },
  requiredPassword: {
    code: 400,
    message: '"password" is required',
  },
  invalidFields: {
    code: 400,
    message: 'Invalid fields',
  },
  unexistingId: {
    code: 404,
    message: 'User does not exist',
  },
};

const categoryError = {
  requiredName: {
    code: 400,
    message: '"name" is required',
  },
};

module.exports = {
  userError,
  categoryError,
};
