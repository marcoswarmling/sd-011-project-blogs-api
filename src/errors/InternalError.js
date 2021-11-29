const ErrorWithCode = require('./ErrorWithCode');

module.exports = class InternalError extends ErrorWithCode {
  constructor(message = 'Erro interno no servidor') {
    super({ message, code: 'internal' });
  }
};
