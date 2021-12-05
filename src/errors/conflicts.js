const error = require('./error');

module.exports = class Conflict extends error {
  constructor(message) {
    super({ message, code: 'conflict' });
  }
};
