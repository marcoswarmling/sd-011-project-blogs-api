const { User } = require('../models');
const { generateToken } = require('./register');

const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ where: { email, password } });
    console.log(user);
    if (user) {
      const token = generateToken(user.displayName);
      return token;
    }

    return null;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  loginUser,
};