const mainError = require('./mainError');

// 404 Not Found
module.exports = class NotFound extends mainError {
  constructor(message) {
    super({ 
      message,
      code: 'notFound',
    });
  }
};
