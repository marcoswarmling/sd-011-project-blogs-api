const ErrorWithCode = require('./ErrorWithCode');

module.exports = class ValidationError extends ErrorWithCode {
  constructor(message) {
    super({ message, code: 'invalidData' });
  }
};
