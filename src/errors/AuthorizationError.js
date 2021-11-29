const ErrorWithCode = require('./ErrorWithCode');

module.exports = class AuthorizationError extends ErrorWithCode {
  constructor(message) {
    super({ message, code: 'authorization' });
  }
};
