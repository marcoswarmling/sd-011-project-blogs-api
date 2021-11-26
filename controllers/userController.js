const { createUserService, getAllUsers } = require('../services/userServices');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const token = await createUserService(displayName, email, password, image);
  return res.status(201).json({ token });
};

const getAllUsersController = async (_req, res) => {
  const users = await getAllUsers();
  return res.status(200).json(users);
};

module.exports = {
  createUser,
  getAllUsersController,
};