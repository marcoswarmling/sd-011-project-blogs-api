const { status } = require('../schemas');

const validLoginEmail = (email) => {
  if (email === '') {
    const message = new Error('"email" is not allowed to be empty');
    message.code = status.BAD_REQUEST;
    throw message;
  }

  if (!email) {
    const message = new Error('"email" is required');
    message.code = status.BAD_REQUEST;
    throw message;
  }
};

const validLoginPassword = (password) => {
  if (password === '') {
    const message = new Error('"password" is not allowed to be empty');
    message.code = status.BAD_REQUEST;
    throw message;
  }

  if (!password) {
    const message = new Error('"password" is required');
    message.code = status.BAD_REQUEST;
    throw message;
  }
};

module.exports = {
  validLoginEmail,
  validLoginPassword,
};
