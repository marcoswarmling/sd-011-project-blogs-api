const mainError = require('./mainError');

// 403 Forbidden
module.exports = class Forbidden extends mainError {
  constructor(message) {
    super({ 
      message,
      code: 'forbidden',
    });
  }
};
