const usersService = require('../services/users');

const createUser = async (req, res, _next) => {
  const { displayName, email, password, image } = req.body;

  const emailExists = await usersService.isEmailRegistered(email);

  if (emailExists) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const token = await usersService.createUser(displayName, email, password, image);

  return res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
  const users = await usersService.getAllUsers();

  return res.status(200).json(users);
};

const getUserById = async (req, res, _next) => {
  const { id } = req.params;

  const user = await usersService.getUserById(id);

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(user);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
