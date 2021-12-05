const serviceUser = require('../services/userService');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await serviceUser.create({ displayName, email, password, image });
  if (response.message) {
    return res.status(409).json(response);
  }
  return res.status(201).json(response);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await serviceUser.login({ email, password });
  if (response.message) {
    return res.status(400).json(response);
  }
  return res.status(200).json(response);
};

const getAllUser = async (_req, res) => {
  const response = await serviceUser.getAllUser();
  return res.status(200).json(response);
};

module.exports = {
  create,
  login,
  getAllUser,
};