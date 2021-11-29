const { Users } = require('../models');
const { createAuth } = require('../middlewares/auth/createAuth');

const create = async ({ displayName, email, password, image }) => {
  const userData = { displayName, email, password, image };
  const newUser = await Users.create(userData);
  if (!newUser) {
    return { message: 'User already exists' };
  }

  const token = await createAuth(email, password, newUser.id);

 return token;
};

const find = async (email) => {
  const users = await Users.findOne({
    where: { email },
  });
  return users;
};

const findAll = async () => {
  const users = await Users.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const findByID = async (id) => {
  const user = await Users.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!user) {
    throw new Error('User does not exist');
  }
  return user;
};

const deleteByID = async (id) => {
  const userDeleted = await Users.destroy({
    where: { id },
  });
  if (!userDeleted || userDeleted === 0) {
    throw new Error('Invalid Operation');
  }
  return userDeleted;
};

module.exports = {
  create,
  find,
  findAll,
  findByID,
  deleteByID,
};