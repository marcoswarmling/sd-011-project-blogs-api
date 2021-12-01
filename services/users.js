const { user } = require('../models');

const createUser = async (displayName, email, password, image) => {
  try {
    await user.create({
      displayName,
      email,
      password,
      image,
    });
  } catch (err) {
    return err;
  }
};

module.exports = {
  createUser,
};
