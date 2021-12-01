const {
  isValidNameLength,
  isValidEmail,
  isValidPassword,
} = require('../helpers');

const invalidNameLength = new Error('invalidNameLength');
const invalidEmailFormat = new Error('invalidEmailFormat');
const invalidPasswordFormat = new Error('invalidPasswordFormat');
// const nullName = new Error('nullName');
// const nullEmail = new Error('nullEmail');
const nullPassword = new Error('nullPassword');
const emptyField = new Error('emptyField');
// const errorData = new Error('errorData');

function nameValidation(name) {
  if (!name) {
    throw emptyField;
  }

  if (!isValidNameLength(name)) {
    throw invalidNameLength;
  }

  return true;
}

function emailValidation(email) {
  if (!email) {
    throw emptyField;
  }

  if (!isValidEmail(email)) {
    throw invalidEmailFormat;
  }

  return true;
}

function passwordValidation(password) {
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

// function loginValidation(req, _res, next) {
//   const { body } = req;
//   isValidLogin(body);

//   next();
// }

module.exports = {
  newUserValidation,
};
