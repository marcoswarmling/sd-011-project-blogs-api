const { User } = require('../models');

const getUserByName = async (displayName) => {
  try {
    const user = await User.findOne({ where: { displayName } });

    if (user) {
      return user;
    }

    return null;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getUserByName,
};