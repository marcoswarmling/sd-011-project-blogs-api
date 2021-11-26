const errorCodes = require('./errorCodes');

module.exports = {
  user: {
    invalidNameLength: {
      statusCode: errorCodes.badRequest,
      message: '"displayName" length must be at least 8 characters long',
    },
    requiredEmail: {
      statusCode: errorCodes.badRequest,
      message: '"email" is required',
    },
    invalidEmail: {
      statusCode: errorCodes.badRequest,
      message: '"email" must be a valid email',
    },
    requiredPassword: {
      statusCode: errorCodes.badRequest,
      message: '"password" is required',
    },
    invalidPasswordLength: {
      statusCode: errorCodes.badRequest,
      message: '"password" length must be 6 characters long',
    },
    alreadyExists: {
      statusCode: errorCodes.conflict,
      message: 'User already registered',
    },
    notFound: {
      statusCode: errorCodes.notFound,
      message: 'User does not exist',
    },
  },
};
