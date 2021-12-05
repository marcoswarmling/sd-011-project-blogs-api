const mainError = require('./mainError');

// 422 Unprocessable Entity
module.exports = class DataInvalid extends mainError {
  constructor(message) {
    super({ 
      message,
      code: 'invalidData',
    });
  }
};
