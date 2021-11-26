const usersServices = require('../services/usersServices');

const ERROR_MESSAGE = { message: 'error interno' };

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await usersServices.createUser(displayName, email, password, image);
    return res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json(ERROR_MESSAGE);
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const users = await usersServices.getAllUsers();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(ERROR_MESSAGE);
  }
};

module.exports = {
  getAllUsers,
  createUser,
};