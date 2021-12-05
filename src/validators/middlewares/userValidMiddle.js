const { User } = require('../../models');

const STATUS_BAD_REQUEST = 400;
const STATUS_CONFLICT = 409;

const MSG_MISSING_NAME = '"name" is required';
const MSG_MISSING_EMAIL = '"email" is required';
const MSG_MISSING_PASSW = '"password" is required';
const MSG_EMPTY_NAME = '"name" is not allowed to be empty';
const MSG_EMPTY_EMAIL = '"email" is not allowed to be empty';
const MSG_EMPTY_PASSW = '"password" is not allowed to be empty';
const MSG_INVALID_EMAIL = '"email" must be a valid email';
const MSG_EXISTS_USER = 'User already registered';
const MSG_LENGTH_NAME = '"displayName" length must be at least 8 characters long';
const MSG_PASSW_LENGTH = '"password" length must be 6 characters long';

function nameValidator(name) {
  if (typeof name === 'undefined') {
    return { status: STATUS_BAD_REQUEST, message: MSG_MISSING_NAME };
  }
  
  if (!name) {
    return { status: STATUS_BAD_REQUEST, message: MSG_EMPTY_NAME };
  }

  if (name.length < 8) {
    return { status: STATUS_BAD_REQUEST, message: MSG_LENGTH_NAME };
  }

  return {};
}

const emailValidator = async (email) => {
  const emailRegexp = new RegExp('\\S+@\\S+\\.\\S+');

  if (typeof email === 'undefined') {
    return { status: STATUS_BAD_REQUEST, message: MSG_MISSING_EMAIL };
  }

  if (!email) {
    return { status: STATUS_BAD_REQUEST, message: MSG_EMPTY_EMAIL };
  }

  if (!emailRegexp.test(email)) {
    return { status: STATUS_BAD_REQUEST, message: MSG_INVALID_EMAIL };
  }

  const user = await User.findOne({ where: { email } });

  if (user !== null) {
    return { status: STATUS_CONFLICT, message: MSG_EXISTS_USER };
  }

  return {};
};

function passwordValidator(password) {
  if (typeof password === 'undefined') {
    return { status: STATUS_BAD_REQUEST, message: MSG_MISSING_PASSW };
  }

  if (!password) {
    return { status: STATUS_BAD_REQUEST, message: MSG_EMPTY_PASSW };
  }

  if (password.length !== 6) {
    return { status: STATUS_BAD_REQUEST, message: MSG_PASSW_LENGTH };
  }

  return {};
}

module.exports = async (req, res, next) => {
  const { displayName: name, email, password } = req.body;
  
  const nameResult = nameValidator(name);
  if (nameResult.status) { 
    return res.status(nameResult.status).json({ message: nameResult.message });
  }

  const emailResult = await emailValidator(email);
  if (emailResult.status) { 
    return res.status(emailResult.status).json({ message: emailResult.message });
  }
  
  const passwordlResult = passwordValidator(password);
  if (passwordlResult.status) { 
    return res.status(passwordlResult.status).json({ message: passwordlResult.message });
  }

  next();
};