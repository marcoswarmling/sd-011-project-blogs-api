const SECRET = 'charmander>squirtle';
const jwt = require('jsonwebtoken');

const validateUserName = (name) => {
  if (name && name.length < 8) {
    return {
      message: '"displayName" length must be at least 8 characters long',
      status: 400,
    };
  }

  return null;
};

const validateUserEmail = (email) => {
  if (!email) {
    return {
      message: '"email" is required',
      status: 400,
    };
  }

  const regex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
  const emailRegexTest = regex.test(email);

  if (!emailRegexTest) {
    return {
      message: '"email" must be a valid email',
      status: 400,
    };
  }

  return null;
};

const validateUserPassword = (password) => {
  if (!password) {
    return {
      message: '"password" is required',
      status: 400,
    };
  }

  if (password.length < 6) {
    return {
      message: '"password" length must be 6 characters long',
      status: 400,
    };
  }

  return null;
};

const validateLoginCredentials = (email, password) => {
  if (!email) return { message: '"email" is required', status: 400 };
  if (!password) return { message: '"password" is required', status: 400 };

  return null;
};

const validateEmptyCredentials = (email, password) => {
  if (email === '') {
    return {
      message: '"email" is not allowed to be empty',
      status: 400,
    };
  }
  if (password === '') {
    return {
      message: '"password" is not allowed to be empty',
      status: 400,
    };
  }

  return null;
};

const validateJWT = async (token) => {
  if (!token) {
    return { message: 'Token not found', status: 401 };
  }
  try {
    const jwtValid = jwt.verify(token, SECRET);

    if (!jwtValid) {
      return { message: 'token malformed', status: 401 };
    }

    return null;
  } catch (err) {
    return { message: 'Expired or invalid token', status: 401 };
  }
};

module.exports = {
  validateUserName,
  validateUserEmail,
  validateUserPassword,
  validateLoginCredentials,
  validateEmptyCredentials,
  validateJWT,
};