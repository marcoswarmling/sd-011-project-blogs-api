const { User } = require('../models');
const generateToken = require('../auth/generateToken');
const { validateUser } = require('../validations/users/userValidations');

const addUser = async (user) => {
  const { displayName, email, password } = user;
  const isNotValidUser = validateUser(displayName, email, password);

  if (isNotValidUser) return isNotValidUser;

  const foundUser = await User.findOne({ where: { email: user.email } });
  if (foundUser) return { code: 409, message: 'User already registered' };

  const token = generateToken(user);
  return { code: 201, token };
};

module.exports = { addUser };