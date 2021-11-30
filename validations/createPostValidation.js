const { status } = require('../schemas');
const JWTFunctions = require('../helpers/JWTfunctions');

const validPostFields = ({ title, content, categoryIds }) => {
  if (!title) {
    const message = new Error('"title" is required');
    message.code = status.BAD_REQUEST;
    throw message;
  }
  if (!content) {
    const message = new Error('"content" is required');
    message.code = status.BAD_REQUEST;
    throw message;
  }
  if (!categoryIds) {
    const message = new Error('"categoryIds" is required');
    message.code = status.BAD_REQUEST;
    throw message;
  }
};

const getUserFromToken = (token) => JWTFunctions.validateToken(token);

module.exports = {
  validPostFields,
  getUserFromToken,
};