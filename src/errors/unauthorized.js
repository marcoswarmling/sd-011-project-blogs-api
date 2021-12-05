const mainError = require('./mainError');

// 401 Unauthorized
module.exports = class Unauthorized extends mainError {
  constructor(message) {
    super({
      message,
      code: 'authorization',
    });
  }
};
