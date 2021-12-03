const { createToken } = require('../auth/createJWT');
// const validateJWT = require('../auth/validateJWT');

const { User } = require('../models');

const create = async (displayName, email, password, image) => {
  const { id } = await User.create({ displayName, email, password, image });

  const token = createToken({ id, displayName, email });

  return token;
};

module.exports = {
  create,
};
