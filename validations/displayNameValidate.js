const { BAD_REQUEST } = require('../utils/statusMessage');

const validateDisplayName = (displayName) => {
  if (!displayName || displayName.length < 8) {
    return {
      code: BAD_REQUEST,
      message: '"displayName" length must be at least 8 characters long',
    };
  }
  return null;
};

module.exports = validateDisplayName;
