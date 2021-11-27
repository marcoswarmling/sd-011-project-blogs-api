const { Users } = require('../models');
const createUserValidation = require('../validations/createUserValidation');
const { status } = require('../schemas');

const validateEmailExistsError = (error) => {
  if (error.message === 'Validation error') {
    return {
        code: status.CONFLICT,
        message: 'User already registered',
    };
  }
  return error;
};

const createUser = async ({ displayName, email, password, image }) => {
  try {
    createUserValidation.validDisplayName(displayName);
    createUserValidation.validUserEmail(email); 
    createUserValidation.validPassword(password);

    const response = await Users.create({ displayName, email, password, image });
    return response;
  } catch (e) {
    const { message, code } = validateEmailExistsError(e);
    return { error: { message, code } };
  }
};

module.exports = {
  createUser,
};