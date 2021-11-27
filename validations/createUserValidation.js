// Source: https://stackoverflow.com/questions/69165892/js-how-to-throw-error-with-a-status-code
const { status } = require('../schemas');

const validUserEmail = (email) => {
  // Source: https://forum.blip.ai/t/resolvido-regex-para-validacao-de-email/1635
  const emailPattern = /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/;

  if (!email) {
    const message = new Error('"email" is required');
    message.code = status.BAD_REQUEST;
    throw message;
  }

  if (!emailPattern.test(email)) {
    const message = new Error('"email" must be a valid email');
    message.code = status.BAD_REQUEST;
    throw message;
  }
};

const validDisplayName = (displayName) => {
  const correctType = typeof displayName === 'string';
  const hasCorrectLength = displayName.length > 7;

  if (!(correctType && hasCorrectLength)) {
    const message = new Error('"displayName" length must be at least 8 characters long');
    message.code = status.BAD_REQUEST;
    throw message;
  }
};

const validPassword = (password) => {
  if (!password) {
    const message = new Error('"password" is required');
    message.code = status.BAD_REQUEST;
    throw message;
  }

  if (password.length !== 6) {
    const message = new Error('"password" length must be 6 characters long');
    message.code = status.BAD_REQUEST;
    throw message;
  }
};

module.exports = {
  validUserEmail,
  validDisplayName,
  validPassword,
};
