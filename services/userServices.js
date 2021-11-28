const { User } = require('../models');
const newToken = require('../auth/newToken');

const createUseServices = async (body) => {
  const { displayName, email, password, image } = body;
  await User.create({ displayName, email, password, image });
  const token = newToken(email);
  return token;
};

const getAllUsersServices = async () => User.findAll({
  attributes: { exclude: ['password'] },
});

const getByIdServices = async (id) => User.findByPk(id);

module.exports = {
  createUseServices,
  getAllUsersServices,
  getByIdServices,
};
