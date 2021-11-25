const { User } = require('../../models');

const invalidReqBodyResponse = (invalidReqBody) => ({
  statusCode: invalidReqBody.statusCode,
  responseMessage: { message: invalidReqBody.responseMessage },
});

const validateDisplayName = (displayName) => {
  const responseMessage = '"displayName" length must be at least 8 characters long';
  if (displayName.length < 8) return responseMessage;
  return null;
};

const validateEmail = (email) => {
  const emailRequired = '"email" is required';
  const emailMustBeValid = '"email" must be a valid email';

  if (!email) return emailRequired;

  const validEmail = /^[a-z][a-z\d_-]+\.?([a-z\d_-]+)?[^-]@[a-z-]{2,12}\.[a-z]{2,3}(\.[a-z]{2})?$/i;
  if (!validEmail.test(email)) return emailMustBeValid;
  
  return null;
};

const checkIfEmailAlreadyExists = async (email) => {
  const findUserByEmail = await User.findOne({ where: { email } });
  const code = 409;
  const message = 'User already registered';

  if (findUserByEmail) return { code, message };

  return null;
};

const validatePassword = (password) => {
  let responseMessage = '"password" length must be 6 characters long';
  if (!password) {
    responseMessage = '"password" is required';
    return responseMessage;
  }
  
  if (password.length !== 6) return responseMessage;
};

const validateReqBody = async ({ displayName, email, password }) => {
  const statusCode = 400;

  const invalidPasswordMessage = validatePassword(password);
  if (invalidPasswordMessage) return { statusCode, responseMessage: invalidPasswordMessage };

  const invalidDisplayNameMessage = validateDisplayName(displayName);
  if (invalidDisplayNameMessage) return { statusCode, responseMessage: invalidDisplayNameMessage };

  const invalidEmailMessage = validateEmail(email);
  if (invalidEmailMessage) return { statusCode, responseMessage: invalidEmailMessage };

  const emailExists = await checkIfEmailAlreadyExists(email);
  if (emailExists) return { statusCode: emailExists.code, responseMessage: emailExists.message };
  
  return null;
};

module.exports = {
  validateReqBody,
  invalidReqBodyResponse,
};