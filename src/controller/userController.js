const UserService = require('../services/userService');

const messageErrorServer = 'Internal Error Server';

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    const { code, result } = await UserService.createUser(displayName, email, password, image);
    res.status(code).json(result);
  } catch (error) {
    res.status(500).json({ message: messageErrorServer });
  }
};

const connectUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { code, result } = await UserService.connectUser(email, password);
    res.status(code).json(result);
  } catch (error) {
    res.status(500).json({ message: messageErrorServer });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const { code, result } = await UserService.getAllUsers();
    res.status(code).json(result);
  } catch (error) {
    res.status(500).json({ message: messageErrorServer });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const { code, result } = await UserService.getUserById(id);
    res.status(code).json(result);
  } catch (error) {
    res.status(500).json({ message: messageErrorServer });
  }
};

module.exports = {
  createUser,
  connectUser,
  getAllUsers,
  getUserById,
};