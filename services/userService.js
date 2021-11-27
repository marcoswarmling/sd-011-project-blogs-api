const { Users } = require('../models');
const createUserValidation = require('../validations/createUserValidation');
const UsersValidation = require('../validations/getAllUsersValidation');
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

const getAllUsers = async (authorization) => {
  try {
    const query = { attributes: { exclude: ['password'] } };
    UsersValidation.tokenFieldValidation(authorization);

    const allUsers = await Users.findAll(query);
    return allUsers;
  } catch (e) {
    return { error: { message: e.message, code: e.code } };
  }
};

const getUserById = async (id, authorization) => {
  try {
    const query = { where: { id } };
    UsersValidation.tokenFieldValidation(authorization);

    const oneUser = await Users.findOne(query);
    return oneUser;
  } catch (e) {
    return { error: { message: e.message, code: e.code } };
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};