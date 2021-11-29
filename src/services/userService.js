const { User } = require('../models');
const { createJwtToken } = require('../auth/createToken');

const errorInternalServer = { code: 500, result: { message: 'Internal Error Server' } };

const createUser = async (displayName, email, password, image) => {
  try {
    const userCreated = await User.create({
      displayName, email, password, image,
    });
    return { code: 201, result: userCreated };
  } catch (error) {
    return errorInternalServer;
  }
};

const connectUser = async (email, password) => {
  const result = createJwtToken(email, password);
  return result;
};

const getAllUsers = async () => {
  try {
    const getUsers = await User.findAll();
    return { code: 200, result: getUsers };
  } catch (error) {
    return errorInternalServer;
  }
};

const getUserById = async (id) => {
  try {
    const findUserById = await User.findByPk(id);
    if (!findUserById) return { code: 404, result: { message: 'User does not exist' } };
    return { code: 200, result: findUserById };
  } catch (error) {
    return errorInternalServer;
  }
};

const excludeUser = async (email) => {
  try {
    await User.destroy({ where: { email } });
    return { code: 204 };
  } catch (error) {
    return errorInternalServer;
  }
};

module.exports = {
  createUser,
  connectUser,
  getAllUsers,
  getUserById,
  excludeUser,
};