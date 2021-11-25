const { User } = require('../../models');

const loginUserVerify = async ({ email, password }) => {
  const result = await User.findOne({ where: { email, password } });
  return result;
};

module.exports = { loginUserVerify };