const statusCodes = require('./statusCodesSchema');

module.exports = {
  user: {
    invalidNameLength: {
      statusCode: statusCodes.badRequest,
      message: '"displayName" length must be at least 8 characters long',
    },
    requiredEmail: {
      statusCode: statusCodes.badRequest,
      message: '"email" is required',
    },
    invalidEmail: {
      statusCode: statusCodes.badRequest,
      message: '"email" must be a valid email',
    },
    requiredPassword: {
      statusCode: statusCodes.badRequest,
      message: '"password" is required',
    },
    invalidPasswordLength: {
      statusCode: statusCodes.badRequest,
      message: '"password" length must be 6 characters long',
    },
    alreadyExists: {
      statusCode: statusCodes.conflict,
      message: 'User already registered',
    },
  },
};
