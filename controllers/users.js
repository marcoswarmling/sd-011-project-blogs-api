const usersService = require('../services/users');

const createUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  const emailExists = await usersService.isEmailRegistered(email);

  if (emailExists) {
    return next({ code: 'emailExists', message: 'User already registered' });
  }

  const token = await usersService.createUser(displayName, email, password, image);

  res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
  const users = await usersService.getAllUsers();

  res.status(200).json(users);
};

module.exports = {
  createUser,
  getAllUsers,
};
