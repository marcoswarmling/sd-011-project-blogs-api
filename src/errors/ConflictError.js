const ErrorWithCode = require('./ErrorWithCode');

module.exports = class ConflictError extends ErrorWithCode {
  constructor(message) {
    super({ message, code: 'conflict' });
  }
};
