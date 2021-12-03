const { BAD_REQUEST } = require('../utils/statusMessage');

const validateName = (name) => {
  if (!name) {
    return {
      code: BAD_REQUEST,
      message: '"name" is required',
    };
  }
  return null;
};

module.exports = validateName;
