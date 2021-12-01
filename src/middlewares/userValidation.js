const {
  isValidNameLength,
  isValidEmail,
  isValidPassword,
} = require('../helpers');

const invalidNameLength = new Error('invalidNameLength');
const invalidEmailFormat = new Error('invalidEmailFormat');
const invalidPasswordFormat = new Error('invalidPasswordFormat');
// const nullName = new Error('nullName');
const nullemail = new Error('nullemail');
const emptyEmail = new Error('emptyEmail');
const nullPassword = new Error('nullPassword');
const emptyPassword = new Error('emptyPassword');
const emptyField = new Error('emptyField');
// const errorData = new Error('errorData');

function nameValidation(name) {
  if (!name || name === '') {
    throw emptyField;
  }

  if (!isValidNameLength(name)) {
    throw invalidNameLength;
  }

  return true;
}

function emailValidation(email) {
  if (email === '') {
    throw emptyEmail;
  }

  if (!email) {
    throw nullemail;
  }

  if (!isValidEmail(email)) {
    throw invalidEmailFormat;
  }

  return true;
}

function passwordValidation(password) {
  if (password === '') {
    throw emptyPassword;
  }

  if (!password) {
    throw nullPassword;
  }

  if (!isValidPassword(password)) {
    throw invalidPasswordFormat;
  }

  return true;
}

function newUserValidation(req, _res, next) {
  const { displayName, email, password } = req.body;

  nameValidation(displayName);
  emailValidation(email);
  passwordValidation(password);

  next();
}

function loginValidation(req, _res, next) {
  const { email, password } = req.body;

  emailValidation(email);
  passwordValidation(password);

  next();
}

// function loginValidation(req, _res, next) {
//   const { body } = req;
//   isValidLogin(body);

//   next();
// }

module.exports = {
  newUserValidation,
  loginValidation,
};
