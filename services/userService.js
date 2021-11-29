const { User } = require('../models');

const registerUser = async (displayName, email, password, image) => {
  console.log('==> Passou pelo Service <==');

  const result = await User.create(
    { displayName, email, password, image },
  );

  return result;
};

module.exports = { registerUser };