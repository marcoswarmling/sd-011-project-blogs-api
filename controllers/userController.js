const { userService } = require('../services');

const newUser = async (req, res) => {
  const token = await userService.newUser(req.body);
  return res.status(201).json({ token });
};

const login = async (req, res) => {
  const token = await userService.login(req.body);
  return res.status(200).json({ token });
};

const getUsers = async (req, res) => {
  const users = await userService.getUsers();
  return res.status(200).json(users);
};

module.exports = {
  newUser,
  login,
  getUsers,
};