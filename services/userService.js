const { User } = require('../models');

const createNewUser = async ({ displayName, email, password, image }) => {
 await User.create({ displayName, email, password, image });
};

module.exports = {
  createNewUser,
};