const { User } = require('../../models');

const login = async (email, password) => {
  const newUser = await User.findOne({ where: { email, password } });

  return newUser;
};

module.exports = {
  login,
};
