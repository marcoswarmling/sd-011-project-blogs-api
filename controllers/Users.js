const serviceUser = require('../services/Users');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await serviceUser.create({ displayName, email, password, image });
  const { message } = response;
  if (message) {
    return res.status(409).json(response);
  }
  return res.status(201).json(response);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await serviceUser.login({ email, password });
  const { message } = response;
  if (message) {
    return res.status(400).json(response);
  }
  return res.status(200).json(response);
};

const getAll = async (_req, res) => {
  const response = await serviceUser.getAll();
  return res.status(200).json(response);
};

module.exports = {
  create,
  login,
  getAll,
};