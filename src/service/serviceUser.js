const { Users } = require('../../models');

const create = async (displayName, email, password, image) => {
  const getUser = await Users.findOne({ where: { email } });

  if (getUser) {
    return { message: 'User already registered' };
  } 
  const newUser = await Users.create({ displayName, email, password, image });
  return newUser;
};

const getAll = async () => {
  const getUsers = await Users.findAll({ attributes: { exclude: ['password'] } });
  return getUsers;
};

const getById = async (id) => {
  const getUserById = await Users
  .findOne({ where: { id }, attributes: { exclude: ['password'] } });
  return getUserById;
};

module.exports = { create, getAll, getById };
