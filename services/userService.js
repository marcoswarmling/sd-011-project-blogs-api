const { Users } = require('../models');
const { createAuth } = require('../auth/createAuth');

const create = async ({ displayName, email, password, image }) => {
  const userData = { displayName, email, password, image };
  const newUser = await Users.create(userData);
  if (!newUser) {
    return { message: 'User already exists' };
  }

  const token = await createAuth(email, password);

 return token;
};

const find = async (email) => {
  const users = await Users.findOne({
    where: { email },
  });
  return users;
};

module.exports = {
  create,
  find,
};