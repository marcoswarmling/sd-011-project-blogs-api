const mainError = require('./mainError');

// server side errors
module.exports = class connectError extends mainError {
  constructor(message = 'Erro interno no servidor') {
    super({ 
      message,
      code: 'internal',
    });
  }
};
