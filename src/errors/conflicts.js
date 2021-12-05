const mainError = require('./mainError');

// 409 Conflict
module.exports = class Conflicts extends mainError {
  constructor(message) {
    super({ 
      message, 
      code: 'conflict',
    });
  }
};
