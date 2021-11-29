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

const getUser = async (req, res) => {
  const users = await userService.getUser(req.params.id);
  return res.status(200).json(users);
};

const deleteMe = async (req, res) => {
  await userService.deleteMe(req.token.id);
  return res.status(204).end();
};

module.exports = {
  newUser,
  login,
  getUsers,
  getUser,
  deleteMe,
};