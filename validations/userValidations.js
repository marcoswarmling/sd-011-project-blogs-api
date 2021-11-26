const {
  userAlreadyRegistered,
  nameIsRequired,
  invalidName,
  emailIsRequired,
  invalidEmail,
  passwordIsRequired,
  invalidPassword,
} = require('../utils/errors');

const validDisplayName = (name) => {
  if (!name) throw nameIsRequired;
  if (name.length < 8) throw invalidName;
};

const validEmail = (email) => {
  if (!email) throw emailIsRequired;

  const regEx = /^\w+@\w[^]+\.com(\.br)?$/;
  const check = regEx.test(email);

  if (!check) throw invalidEmail;
};

const validPassword = (password) => {
  if (!password) throw passwordIsRequired;
  if (password.length !== 6) throw invalidPassword;
};

const newUserInformation = (payload) => {
  const { displayName, email, password } = payload;
  
  validDisplayName(displayName);
  validEmail(email);
  validPassword(password);
};

const newUser = (user) => {
  if (user) throw userAlreadyRegistered;
};

module.exports = {
  newUserInformation,
  newUser,
};