const {
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
} = require('../utils/errors');

const validDisplayName = (name) => {
  if (!name) throw nameIsRequired;
  if (name.length < 8) throw invalidName;
};

const validEmail = (email) => {
  if (email === '') throw emailNotAllowedEmpty;
  if (!email) throw emailIsRequired;

  const regEx = /^\w+@\w[^]+\.com(\.br)?$/;
  const check = regEx.test(email);

  if (!check) throw invalidEmail;
};

const validPassword = (password) => {
  if (password === '') throw passwordNotAllowedEmpty;
  if (!password) throw passwordIsRequired;
  if (password.length !== 6) throw invalidPassword;
};

const newUserInformation = ({ displayName, email, password }) => {  
  validDisplayName(displayName);
  validEmail(email);
  validPassword(password);
};

const uniqueEmail = (user) => {
  if (user) throw userAlreadyRegistered;
};

const login = ({ email, password }) => {
  validEmail(email);
  validPassword(password);
};

const user = (payload) => {
  if (!payload) throw invalidFields;
};

module.exports = {
  newUserInformation,
  uniqueEmail,
  login,
  user,
};