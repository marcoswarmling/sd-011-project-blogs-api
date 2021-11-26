const { createUserService, getAllUsers, getUserById } = require('../services/userServices');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const token = await createUserService(displayName, email, password, image);
  return res.status(201).json({ token });
};

const getAllUsersController = async (_req, res) => {
  const users = await getAllUsers();
  return res.status(200).json(users);
};

const getUserByIdController = async (req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user.dataValues);
};

module.exports = {
  createUser,
  getAllUsersController,
  getUserByIdController,
};