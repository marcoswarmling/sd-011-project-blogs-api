const newError = (status) => {
  const error = new Error();
  error.statusCode = status;
  return error;
};

const userAlreadyRegistered = newError('userAlreadyRegistered');

const nameIsRequired = newError('nameIsRequired');

const invalidName = newError('invalidName');

const emailIsRequired = newError('emailIsRequired');

const invalidEmail = newError('invalidEmail');

const passwordIsRequired = newError('passwordIsRequired');

const invalidPassword = newError('invalidPassword');

const invalidFields = newError('invalidFields');

const emailNotAllowedEmpty = newError('emailNotAllowedEmpty');

const passwordNotAllowedEmpty = newError('passwordNotAllowedEmpty');

module.exports = {
  userAlreadyRegistered,
  nameIsRequired,
  invalidName,
  emailIsRequired,
  invalidEmail,
  passwordIsRequired,
  invalidPassword,
  invalidFields,
  emailNotAllowedEmpty,
  passwordNotAllowedEmpty,
};