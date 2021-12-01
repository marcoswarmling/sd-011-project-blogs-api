const usersServices = require('../services/users');
const { status, intServerError } = require('../Helpers/status&messages');

const createNewUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await usersServices.createNewUser(displayName, email, password, image);
    if (newUser.status) {
      return res.status(newUser.status).json({ message: newUser.message });
    }
    return res.status(status.create).json({ token: newUser });
  } catch (error) {
    return res.status(status.intServerError).json({ message: intServerError.unknown });
  }
};

const findAllUsers = async (req, res) => {
  try {
    const allUsers = await usersServices.findAllUsers();
    if (!allUsers) return res.status(404).json({ message: 'User not found' });
    return res.status(status.sucess).json(allUsers);
  } catch (error) {
    return res.status(status.intServerError).json({ message: intServerError.unknown });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const userById = await usersServices.getUserById(id);
    if (userById.status) {
      return res.status(userById.status).json({ message: userById.message });
    }
    return res.status(status.sucess).json(userById);
  } catch (error) {
    return res.status(status.intServerError).json({ message: intServerError.unknown });
  }
};

module.exports = { createNewUser, findAllUsers, getUserById };
