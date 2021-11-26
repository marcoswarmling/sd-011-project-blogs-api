const { User } = require('../models');
const {
  validEmail,
  validName,
  validPass,
  tokenGenerator,
  existingUser,
} = require('../utils/validations');

const userRegister = async ({ displayName, email, password, image }) => {
  if (await existingUser(email) !== null) {
    return { error: { code: 'conflict' } };
  }
  if (!validEmail(email)) {
    return { error: { code: 'invalidEmail' } };
  }
  if (!validPass(password)) {
    return { error: { code: 'invalidPass' } };
  }
  if (!validName(displayName)) {
    return { error: { code: 'invalidName' } };
  }
  await User.create({ displayName, email, password, image });
  return {
    token: tokenGenerator(email, password),
  };
};

module.exports = {
  userRegister,
};
