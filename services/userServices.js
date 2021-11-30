const { Users } = require('../models');
const newToken = require('../auth/newToken');

const createUseServices = async (body) => {
  const { displayName, email, password, image } = body;
  await Users.create({ displayName, email, password, image });
  const token = newToken(email);
  return token;
};

const getAllUsersServices = async () => Users.findAll({
  attributes: { exclude: ['password'] },
});

const getByIdServices = async (id) => Users.findByPk(id);

module.exports = {
  createUseServices,
  getAllUsersServices,
  getByIdServices,
};
