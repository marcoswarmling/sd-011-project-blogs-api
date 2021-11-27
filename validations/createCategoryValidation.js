const { status } = require('../schemas');

const validCategoryField = (name) => {
  if (!name) {
    const message = new Error('"name" is required');
    message.code = status.BAD_REQUEST;
    throw message;
  }
};

module.exports = {
  validCategoryField,
};