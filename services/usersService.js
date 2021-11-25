const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const validateEmailExists = (email) => {
  if (!email) {
    return { message: '"email" is required' };
  }  
  return null;
};

const validatePasswordExists = (password) => {
  if (!password) {
    return { message: '"password" is required' };
  }
  return null;
};

const validateEmailFormat = (email) => {
  const emailPattern = /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/;
  // para verificação de email abaixo: Source: https://forum.blip.ai/t/resolvido-regex-para-validacao-de-email/1635

  if (!emailPattern.test(email)) {
    return { message: '"email" must be a valid email' };
  }  
  return null;
};

const validatePasswordLength = (password) => {
  if (password.length !== 6) {
    return { message: '"password" length must be 6 characters long' };
  }
  return null;
};

const validateDisplayNameLength = (displayName) => {
  if (displayName.length < 8) {
    return { message: '"displayName" length must be at least 8 characters long' };
  }
  return null;
};

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

const generateToken = (displayName, email) => {
  const secret = 'fogueteNaoTemRe';

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ displayName, email }, secret, jwtConfig);

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

  const token = generateToken(displayName, email);

  return { token };
};

module.exports = {
  create,
};
