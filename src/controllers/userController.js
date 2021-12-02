const userService = require('../services/userService');

const addUser = async (req, res, next) => {
  const token = await userService.addUser(req.body);
  if (token.err) return next(token.err);

  return res.status(201).json({ token });
};

const getAllUsers = async (_req, res, _next) => {
  const user = await userService.getAllUsers();

  return res.status(200).json(user);
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);

  if (user.err) return next(user.err);

  return res.status(200).json(user);
};

const deleteMe = async (req, res, _next) => {
  const { userId } = req;
  await userService.deleteMe(userId);

  return res.status(204).end();
};

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
  deleteMe,
};
