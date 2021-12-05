const mainError = require('./mainError');

// http errors
module.exports = class HttpError extends mainError {
  constructor({ status, message, code }) {
    super({ 
      message,
      code,
    });
    
    this.status = status;
  }
};
