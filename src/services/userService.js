const { Users } = require('../models');
const errors = require('../schemas/errorMessage');

const getByEmail = async (email) => {
  console.log(Users);
  const user = Users.findOne({ where: { email } });

  return user;
};

const create = async (user) => {
  const userExists = await getByEmail(user.email);

  if (userExists) throw errors.user.alreadyExists;

  const newUser = await Users.create(user);

  return newUser;
};

const getAll = async () => {
  const listUsers = await Users.findAll({ attributes: { exclude: ['password'] } });

  return listUsers;
};

const getById = async (id) => {
  const user = await Users.findByPk(id, { attributes: { exclude: ['password'] } });
  
  if (!user) throw errors.getByID.notExistent;

  return user;
};

module.exports = {
  create,
  getByEmail,
  getAll,
  getById,
};