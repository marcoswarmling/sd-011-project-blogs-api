const { User } = require('../models');
const { validateUserCreation } = require('../validations/userValidations');

const createUser = async (displayName, email, password, image) => {
  const test = await validateUserCreation(displayName, email, password);
  if (test !== true) {
    return test;
  }
  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: {
      displayName, email, password, image,
    },
  });
  if (!created) {
    return { error: { message: 'User already registered' } };
  }
  return user;
};

module.exports = { createUser };