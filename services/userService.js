const { Users } = require('../models');
const userValidation = require('../validations/userValidation');
const { status } = require('../schemas');

const validadeEmailExistsError = (error) => {
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
    userValidation.validDisplayName(displayName);
    userValidation.validUserEmail(email); 
    userValidation.validPassword(password);

    const response = await Users.create({ displayName, email, password, image });
    return response;
  } catch (e) {
    const { message, code } = validadeEmailExistsError(e);
    return { error: { message, code } };
  }
};

module.exports = {
  createUser,
};