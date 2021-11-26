const jwt = require('jsonwebtoken');
require('dotenv').config();

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

const validateEmptyPassword = (password) => {
  if (password === '') {
    return { message: '"password" is not allowed to be empty' };
  }
  return null;
};

const validateEmptyEmail = (email) => {
  if (email === '') {
    return { message: '"email" is not allowed to be empty' };
  }
  return null;
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET;

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secret, jwtConfig);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
}
};

module.exports = {
  validateEmailExists,
  validateDisplayNameLength,
  validatePasswordLength,
  validateEmailFormat,
  validatePasswordExists,
  validateEmptyPassword,
  validateEmptyEmail,
  verifyToken,
};
