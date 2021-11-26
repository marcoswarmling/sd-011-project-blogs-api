const jwt = require('jsonwebtoken');
require('dotenv').config();
const { Users } = require('../models');
const { 
  validateEmailExists,
  validatePasswordExists,
  validateEmptyPassword,
  validateEmptyEmail,
} = require('./utils/validators');

const validate = (email, password) => {
  const isEmailEmpty = validateEmptyEmail(email);
  
  if (isEmailEmpty) {
    return isEmailEmpty;
  }

  const isPasswordEmpty = validateEmptyPassword(password);

  if (isPasswordEmpty) {
    return isPasswordEmpty;
  }
  const emailExists = validateEmailExists(email);

  if (emailExists) {
    return emailExists;
  } 

  const passwordExists = validatePasswordExists(password);
  
  if (passwordExists) {
    return passwordExists;
  }

  return null;
};

const userLogin = async (email, password) => {
  const validations = validate(email, password);

  if (validations) {
    return validations;
  }

  const userExists = await Users.findOne({ where: { email, password } });

  if (!userExists) {
    return { message: 'Invalid fields' };
  }
  const { id } = userExists.dataValues;

  const secret = process.env.JWT_SECRET;

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ email, id }, secret, jwtConfig);

  return { token };
};  

module.exports = {
  userLogin,
};
