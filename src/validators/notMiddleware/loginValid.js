const { User } = require('../../models');

const STATUS_BAD_REQUEST = 400;
const MSG_MISSING_EMAIL = '"email" is required';
const MSG_MISSING_PASSW = '"password" is required';
const MSG_EMPTY_EMAIL = '"email" is not allowed to be empty';
const MSG_EMPTY_PASSW = '"password" is not allowed to be empty';
const MSG_INVALID_FIELDS = 'Invalid fields';

function passwordValidator(password, userData) {
  if (typeof password === 'undefined') {
    return { status: STATUS_BAD_REQUEST, message: MSG_MISSING_PASSW };
  }
  
  if (!password) {
    return { status: STATUS_BAD_REQUEST, message: MSG_EMPTY_PASSW };
  }
  
  if (password !== userData.password) {
    return { status: STATUS_BAD_REQUEST, message: MSG_INVALID_FIELDS };
  }

  return {};
}

async function emailValidator(email) {
  if (typeof email === 'undefined') {
    return { status: STATUS_BAD_REQUEST, message: MSG_MISSING_EMAIL };
  }
  
  if (!email) {
    return { status: STATUS_BAD_REQUEST, message: MSG_EMPTY_EMAIL };
  }
    
  const userData = await User.findOne({ where: { email } });

  if (userData === null) {
    return { status: STATUS_BAD_REQUEST, message: MSG_INVALID_FIELDS };
  }

  return userData;
}

const loginValidator = async (email, password) => {
  const emailResult = await emailValidator(email);

  if (emailResult.status) {
    const { status, message } = emailResult;
    return { status, message };
  }

  const passResult = passwordValidator(password, emailResult); // Not asked by Trybe "functional requirements", but I did implemented it

  if (passResult.status) {
    const { status, message } = passResult;
    return { status, message };
  }

  const { id, displayName } = emailResult;

  return { id, displayName };
};

module.exports = {
  loginValidator,
};