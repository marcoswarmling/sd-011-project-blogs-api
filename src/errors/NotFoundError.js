const ErrorWithCode = require('./ErrorWithCode');

module.exports = class NotFoundError extends ErrorWithCode {
  constructor(message) {
    super({ message, code: 'notFound' });
  }
};
