const userService = require('../services/userService');

const addUser = async (req, res, next) => {
  const token = await userService.addUser(req.body);
  if (token.err) return next(token.err);

  return res.status(201).json({ token });
};

const getAllUsers = async (_req, res, _next) => {
  const user = await userService.getAllUsers();

  console.log('user', user);
  return res.status(200).json(user);
};

module.exports = {
  addUser,
  getAllUsers,
};
