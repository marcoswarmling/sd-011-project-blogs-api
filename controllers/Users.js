const userService = require('../services/Users');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await userService.create({ displayName, email, password, image });
  const { message } = response;
  if (message) {
    return res.status(409).json(response);
  }
  return res.status(201).json(response);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await userService.login({ email, password });
  const { message } = response;
  if (message) {
    return res.status(400).json(response);
  }
  return res.status(200).json(response);
};

const getAll = async (_req, res) => {
  const response = await userService.getAll();
  return res.status(200).json(response);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const response = await userService.getById(id);
  const { message } = response;
  if (message) {
    return res.status(404).json(response);
  }
  return res.status(200).json(response);
};

const deleteById = async (req, res) => {
  const { userId } = req.userData;
  await userService.deleteById(userId);
  return res.status(204).end();
};

module.exports = {
  create,
  login,
  getAll,
  getById,
  deleteById,
};
