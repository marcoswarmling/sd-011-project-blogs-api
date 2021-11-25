const { User } = require('../models');

const validatePassword = (passsword) => {
  if (passsword === '') {
    return { type: 'error', err: { code: 400, message: '"password" is required' } };
  }
  if (passsword.length !== 6) {
    return { type: 'error', 
    err: { 
      code: 400, message: '"password" length must be 6 characters long', 
    } };
  }
  return {
    type: 'success',
  };
};

async function verifyIfEmailAlreadyRegistered(email) {
  // https://stackoverflow.com/questions/53612103/how-to-get-simple-array-in-sequelize-findall
  const allUsers = await User.findAll({ raw: true });
  const userFound = allUsers.filter((user) => user.email === email);
  if (userFound.length !== 0) {
    return { type: 'error', 
    err: { 
      code: 400, message: '"email" already registered', 
    } };
  }
  return {
    type: 'success',
  };
}

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  if (!re.test(email)) {
    return { type: 'error', err: { code: 400, message: '"email" must be a valid email' } };
  }
  if (email === '') {
    return { type: 'error', err: { code: 400, message: '"email" is required' } };
  }
  // const emailAlreadyRegistered = await verifyIfEmailAlreadyRegistered(email);
  // if (emailAlreadyRegistered !== []) {
  //   return { type: 'error', err: { code: 400, message: '"email" already registered' } };
  // }
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
    err: { 
      code: 400, message: '"displayName" length must be at least 8 characters long', 
    } };
};

function validateUser(displayName, email, passsword, _image) {
  if (validateDisplayName(displayName).type === 'error') {
    return validateDisplayName(displayName);
  }
  if (validatePassword(passsword).type === 'error') {
    return validatePassword(passsword);
  }
  if (validateEmail(email).type === 'error') {
    return validateEmail(email); 
  }
  return {
    type: 'succces',
  };
} 

module.exports = {
  validateUser,
  verifyIfEmailAlreadyRegistered,
};
