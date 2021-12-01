const { isValidNameLength, isValidEmail, isValidPassword } = require('../helpers');

const invalidNameLength = new Error('invalidNameLength');
const invalidEmailFormat = new Error('invalidEmailFormat');
const invalidPasswordFormat = new Error('invalidPasswordFormat');
// const emptyField = new Error('emptyField');
// const errorData = new Error('errorData');

function newUserValidation(req, _res, next) {
  const { displayName, email, password } = req.body;
  if (!isValidNameLength(displayName)) {
    throw invalidNameLength;
  }

  if (!isValidEmail(email)) {
    throw invalidEmailFormat;
  }

  if (!isValidPassword(password)) {
    throw invalidPasswordFormat;
  }

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
