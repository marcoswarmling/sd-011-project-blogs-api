const { User } = require('../models/user');
const generateToken = require('../auth/generateToken');

const addUser = async (user) => {
  const foundUser = await User.find({ where: { email: user.email } });
  if (foundUser) return { code: 409, message: 'User already registered' };

  const token = generateToken(user);
  return { code: 201, token };
};

module.exports = { addUser };