const { BAD_REQUEST } = require('../utils/statusMessage');

const validatePassword = (pwd) => {
  if (pwd === '') {
     return { code: BAD_REQUEST, message: '"password" is not allowed to be empty' };
  }
  if (!pwd) return { code: BAD_REQUEST, message: '"password" is required' };
  if (pwd.length !== 6) {
    return { code: BAD_REQUEST, message: '"password" length must be 6 characters long' };
  }

  return null;
};

module.exports = validatePassword;
