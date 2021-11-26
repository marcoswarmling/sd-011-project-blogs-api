const { getToken } = require('../helpers/handleToken');
const { User } = require('../models');

const create = async (user, validator) => {
  try {
    validator(user);
    const newUser = await User.create(user);
    const { password, ...data } = newUser;
    return { token: getToken(data) };
  } catch (error) {
    if (error && error.original && error.original.code) error.message = 'User already registered';
    return { message: error.message };
  }
};

module.exports = {
  create,
};
