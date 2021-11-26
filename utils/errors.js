const newError = (status) => {
  const error = new Error();
  error.statusCode = status;
  return error;
};

const userAlreadyRegistered = newError('userAlreadyRegistered');
const displayNameIsRequired = newError('displayNameIsRequired');
const invalidName = newError('invalidName');
const emailIsRequired = newError('emailIsRequired');
const invalidEmail = newError('invalidEmail');
const passwordIsRequired = newError('passwordIsRequired');
const invalidPassword = newError('invalidPassword');
const invalidFields = newError('invalidFields');
const emailNotAllowedEmpty = newError('emailNotAllowedEmpty');
const passwordNotAllowedEmpty = newError('passwordNotAllowedEmpty');
const tokenNotFound = newError('tokenNotFound');
const tokenMalformed = newError('tokenMalformed');
const userNotFound = newError('userNotFound');
const nameIsRequired = newError('nameIsRequired');

module.exports = {
  userAlreadyRegistered,
  displayNameIsRequired,
  invalidName,
  emailIsRequired,
  invalidEmail,
  passwordIsRequired,
  invalidPassword,
  invalidFields,
  emailNotAllowedEmpty,
  passwordNotAllowedEmpty,
  tokenNotFound,
  tokenMalformed,
  userNotFound,
  nameIsRequired,
};