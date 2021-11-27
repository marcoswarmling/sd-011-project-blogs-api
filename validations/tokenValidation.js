const { status } = require('../schemas');
const { validateToken } = require('../helpers/JWTfunctions');

const tokenFieldValidation = (token) => {
  if (token === '') {
    const message = new Error('Token not found');
    message.code = status.UNAUTHORIREZ;
    throw message;
  }

  const validationResult = validateToken(token);

  if (validationResult.error) {
    const { code, message: errorMessage } = validationResult.error;

    const message = new Error(errorMessage);
    message.code = code;
    throw message;
  }
};

module.exports = {
  tokenFieldValidation,
};