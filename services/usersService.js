const jwt = require('jsonwebtoken');
require('dotenv').config();
const { Users } = require('../models');
const { 
  validateEmailExists,
  validateDisplayNameLength,
  validatePasswordLength,
  validateEmailFormat,
  validatePasswordExists,
} = require('./utils/validators');

const validateEmailAlreadyExists = async (email) => {
  const user = await Users.findOne({ where: { email } });

  if (user) {
    return { message: 'User already registered' };
  }
  return null;
};

const validate = (displayName, email, password) => {
  const isDisplayNameValid = validateDisplayNameLength(displayName);
  const passwordExists = validatePasswordExists(password);
  const isEmailFormatValid = validateEmailFormat(email);

  if (passwordExists) {
    return passwordExists;
  } 

  const isPasswordLengthValid = validatePasswordLength(password);
  
  if (isEmailFormatValid) {
    return isEmailFormatValid;
  }
  
  if (isDisplayNameValid) {
    return isDisplayNameValid;
  }

  if (isPasswordLengthValid) {
    return isPasswordLengthValid;
  }
  return null;
};

const generateToken = (email) => {
  const secret = process.env.JWT_SECRET;

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ email }, secret, jwtConfig);

  return token;
};

const create = async (displayName, email, password, image) => {
  const emailExists = validateEmailExists(email);
  const validateFields = validate(displayName, email, password);

  if (emailExists) {
    return emailExists;
  }
  const emailAlreadyExists = await validateEmailAlreadyExists(email);

  if (emailAlreadyExists) {
    return emailAlreadyExists;
  }
  if (validateFields) {
    return validateFields;
  }

  await Users.create({
    displayName, email, password, image,
  });

  const token = generateToken(email);

  return { token };
};

const getAllUsers = async () => {
  const users = await Users.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });

  return users;
};

const getUserById = async (id) => {
  const user = await Users.findOne({ 
    where: { id },
    attributes: ['id', 'displayName', 'email', 'image'],
  });

  if (!user) {
    return { message: 'User does not exist' };
  }

  return user;
};

module.exports = {
  create,
  getAllUsers,
  getUserById,
};
