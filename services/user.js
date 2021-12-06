const { User } = require('../models');

const registerUser = async (user) => {
  const { dataValues: { password, ...newUser } } = await User.create(user);
  return newUser;
};

const findEmail = async (email) => {
  const newUser = await User.findAll({
    where: {
      email,
    },
  });
  return newUser;
};

module.exports = {
  registerUser,
  findEmail,
};
