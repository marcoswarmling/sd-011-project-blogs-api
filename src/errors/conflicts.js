const mainError = require('./mainError');

module.exports = class Conflicts extends mainError {
  constructor(message) {
    super({ message, code: 'conflict' });
  }
};
