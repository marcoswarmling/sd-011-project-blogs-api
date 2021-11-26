const { User } = require('../models');

const validatePassword = (passsword) => {
  if (passsword === undefined) {
    return { type: 'error', code: 400, message: '"password" is required' };
  }
  if (passsword === '') {
    return { type: 'error', code: 400, message: '"password" is not allowed to be empty' };
  }
  if (passsword.length !== 6) {
    return { type: 'error', 
      code: 400,
      message: '"password" length must be 6 characters long' };
  }
  return {
    type: 'success',
  };
};

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  if (email === undefined) {
    return { type: 'error', code: 400, message: '"email" is required' };
  }
  if (email === '') {
    return { type: 'error', code: 400, message: '"email" is not allowed to be empty' };
  }
  if (!re.test(email)) {
    return { type: 'error', code: 400, message: '"email" must be a valid email' };
  }
  return {
    type: 'success',
  };
};

const validateDisplayName = (displayName) => {
  if (displayName.length > 7 && typeof displayName === 'string') {
    return {
      type: 'succces',
    };
  }
  return { type: 'error', 
  code: 400,
  message: '"displayName" length must be at least 8 characters long' };
};

function validateUser(displayName, email, passsword, _image) {
  const isNotValidDisplayName = validateDisplayName(displayName);
  if (isNotValidDisplayName.type === 'error') {
    return isNotValidDisplayName;
  }
  const isNotValidPassword = validatePassword(passsword);
  if (isNotValidPassword.type === 'error') {
    return isNotValidPassword;
  }
  if (validateEmail(email).type === 'error') {
    return validateEmail(email); 
  }
  return {
    type: 'succces',
  };
} 

async function verifyIfEmailAlreadyRegistered(email) {
  // https://stackoverflow.com/questions/53612103/how-to-get-simple-array-in-sequelize-findall
  const allUsers = await User.findAll({ raw: true });
  const userFound = allUsers.filter((user) => user.email === email);
  if (userFound.length !== 0) {
    return { type: 'error', code: 409, message: 'User already registered' };
  }
  return {
    type: 'success',
  };
}

const validateToken = (token) => {
  if (!token) {
  return {
      type: 'error',
      code: 401,
      message: 'Token not found',
    }; 
  }
  if (token !== 'tokenserageradoaqui') {
    return {
      type: 'error',
      code: 401,
      message: 'Expired or invalid token',
    };
  }
  return { type: 'success' };
};

module.exports = {
  validateUser,
  verifyIfEmailAlreadyRegistered,
  validateEmail,
  validatePassword,
  validateToken,
};
