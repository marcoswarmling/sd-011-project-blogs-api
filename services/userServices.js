const { User } = require('../models');

const create = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });
  return user;
};

const getAll = async () => {
  const user = await User.findAll();
  return user;
};

const getById = async (id) => {
  try {
    const user = await User.findOne({ where: { id } });
    const { dataValues } = user;
    delete dataValues.password;
    return dataValues;
  } catch (err) {
    return null;
  }
};

module.exports = {
  create,
  getAll,
  getById,
};
