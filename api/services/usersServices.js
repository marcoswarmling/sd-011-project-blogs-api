const { Users } = require('../models');
const createToken = require('../auth/jwtFunctions');

const createUser = async ({ displayName, email, password, image }) => {
  await Users.create({ displayName, email, password, image });
  const newToken = createToken.create(email);
  return newToken;
};

module.exports = {
  createUser,
};
