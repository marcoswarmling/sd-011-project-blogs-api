const status = require('./errorCodes');

module.exports = {
  user: {
    invalidNameLength: {
      statusCode: status.badRequest,
      message: '"displayName" length must be at least 8 characters long',
    },
    requiredEmail: {
      statusCode: status.badRequest,
      message: '"email" is required',
    },
    invalidEmail: {
      statusCode: status.badRequest,
      message: '"email" must be a valid email',
    },
    requiredPassword: {
      statusCode: status.badRequest,
      message: '"password" is required',
    },
    invalidPasswordLength: {
      statusCode: status.badRequest,
      message: '"password" length must be 6 characters long',
    },
    alreadyExists: {
      statusCode: status.conflict,
      message: 'User already registered',
    },
    notFound: {
      statusCode: status.notFound,
      message: 'User does not exist',
    },
  },
  login: {
    requiredEmail: {
      statusCode: status.badRequest,
      message: '"email" is required',
    },
    requiredPassword: {
      statusCode: status.badRequest,
      message: '"password" is required',
    },
    emptyEmail: {
      statusCode: status.badRequest,
      message: '"email" is not allowed to be empty',
    },
    emptyPassword: {
      statusCode: status.badRequest,
      message: '"password" is not allowed to be empty',
    },
    notExistent: {
      statusCode: status.badRequest,
      message: 'Invalid fields',
    },
  },
};
