const { Users } = require('../models');
const { createAuth } = require('../middlewares/auth/createAuth');

const create = async ({ email, password }) => {
  const newUser = await Users.findOne({ where: { email } });
  if (!newUser || newUser.password !== password || newUser.email !== email) {
    throw new Error('Invalid fields');
  }

  const token = await createAuth(email, password, newUser.id);

 return token;
};

module.exports = {
  create,
};