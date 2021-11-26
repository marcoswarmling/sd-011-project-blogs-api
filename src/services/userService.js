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

module.exports = {
  create,
};