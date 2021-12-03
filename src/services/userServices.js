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

const getById = async (id) => {
  const userFind = await User.findOne({ where: { id } });

  if (!userFind) return { message: 'User does not exist' };
  
  return userFind.dataValues;
};

module.exports = {
  create,
  getAll,
  getById,
};
