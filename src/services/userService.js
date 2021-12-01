const { User } = require('../models');
// const {} = require('../helpers/index');

const createUser = async ({ displayName, email, password, image }) => {
  await User.create({ displayName, email, password, image });
};

const getUserByEmail = async (email) => {
  const findUser = await User.findOne({ where: { email } });
  // console.log(findUser);
  return findUser;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  // const { password, ...allUsersWithoutPwd } = allUsers;
  // console.log(allUsersWithoutPwd);
  // const { id, displayName, email, image } = allUsers;
  // console.log(` ${allUsers} aqui`);
  return allUsers;
  // return {
    // id,
    // displayName,
    // email,
    // image,
  // };
};

const getById = async (id) => {
  const getUserById = await User.findByPk(id);
  return getUserById;
};

module.exports = {
  createUser,
  getUserByEmail,
  getAllUsers,
  getById,
};