const { createToken } = require('../auth/createJWT');

const { User } = require('../models');

const create = async (displayName, email, password, image) => {
  const { id } = await User.create({ displayName, email, password, image });

  const token = createToken({ id, displayName, email });

  return token;
};

const getAll = async () => {
  const users = await User.findAll();

  const userToArray = users.map((user) => user.dataValues);

  return userToArray;
};

module.exports = {
  create,
  getAll,
};
