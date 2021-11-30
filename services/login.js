const { User } = require('../models');
const { generateToken } = require('./register');

const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ where: { email, password } });

    if (user) {
      const token = generateToken(user.displayName);
      return token;
    }

    return null;
  } catch (err) {
    return err;
  }
};

module.exports = {
  loginUser,
};