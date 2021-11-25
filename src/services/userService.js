const { User } = require('../../models');

const userRegister = async (displayName, email, password, image) => {
  const userExists = await User.findOne({ where: { email } });
  if (userExists) return ({ message: 'User already registered' });

  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

module.exports = {
  userRegister,
};