const userService = require('../services/userService');

const createNewUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const newUser = await userService.createNewUser({ displayName, email, password, image });
  return res.status(201).json({ token: newUser });
};

const getAllUsers = async (_req, res) => {
  const AllUsers = await userService.getAllUsers();
  return res.status(200).json(AllUsers);
};

const getUserByPk = async (req, res) => {
  const { id } = req.params;
  const UserByPk = await userService.getUserByPk(id);
  if (!UserByPk) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(UserByPk);
};

module.exports = {
  createNewUser,
  getAllUsers,
  getUserByPk,
};