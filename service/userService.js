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

const login = async (data, validator) => {
  try {
    validator(data);
    const { email, password } = data;
    const user = await User.findOne({ where: { email, password } });
    // if (!user) { throw new Error('Invalid fields'); }
    if (!user) return { message: 'Invalid fields' };
    const { password: pass, ...info } = user;
    return { token: getToken(info) };
  } catch (error) {
    return error;
  }
};

module.exports = {
  create,
  login,
};
