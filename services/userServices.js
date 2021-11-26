const { User } = require('../models');
const { validateUserCreation, loginValidation } = require('../validations/userValidations');

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

const login = async (email, password) => {
  const test = await loginValidation(email, password);
  if (test !== true) {
    return test;
  }
  const user = await User.findAll({ where: { email, password } });
  if (!user || user.length === 0) {
    return { error: { message: 'Invalid fields' } };
  }
  return user;
};

const getUsers = async () => { 
  const users = await User.findAll();
  return users;
};  

module.exports = { createUser, login, getUsers };