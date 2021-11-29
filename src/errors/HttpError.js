const ErrorWithCode = require('./ErrorWithCode');

module.exports = class HttpError extends ErrorWithCode {
  constructor({ status, message, code }) {
    super({ message, code });
    this.status = status;
  }
};
