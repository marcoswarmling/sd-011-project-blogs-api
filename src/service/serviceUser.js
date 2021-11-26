const { Users } = require('../../models');

const create = async (displayName, email, password, image) => {
  const getUser = await Users.findOne({ where: { email } });
  
  if (getUser) {
    return { message: 'User already registered' };
  }

  const newUser = await Users.create({ displayName, email, password, image });

  return newUser;
};

module.exports = { create };
