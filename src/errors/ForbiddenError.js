const ErrorWithCode = require('./ErrorWithCode');

module.exports = class Forbidden extends ErrorWithCode {
  constructor(message) {
    super({ message, code: 'forbidden' });
  }
};
