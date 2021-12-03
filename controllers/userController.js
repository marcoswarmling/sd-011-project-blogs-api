const userService = require('../services/userService');

const registerUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const response = await userService.registerUser(displayName, email, password, image);

  return res.status(201).json(response);
};

const searchAllUsers = async (_req, res) => {
  const response = await userService.searchAllUsers();

  return res.status(200).json(response);
};

const searchUser = async (req, res) => {
  const { id } = req.params;

  const response = await userService.searchUser(id);

  const { err } = response;
  if (err) return res.status(404).json(err);

  return res.status(200).json(response);
};

const deleteUser = async (req, res) => {
  const { userId } = req;

  await userService.deleteUser(userId);

  return res.status(204).json();
};

module.exports = {
  registerUser,
  searchAllUsers,
  searchUser,
  deleteUser,
};