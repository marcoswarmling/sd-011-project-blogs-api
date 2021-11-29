const Service = require('../services/user');

const createUser = async (req, res) => {
  const data = req.body;
  const result = await Service.createUser(data);

  if (result.message) {
    return res.status(result.status).json({ message: result.message });
  }
  return res.status(201).json({ token: result.token });
};

const login = async (req, res) => {
  const data = req.body;
  const result = await Service.validateLogin(data);

  if (result.message) {
    return res.status(result.status).json({ message: result.message });
  }
  return res.status(200).json({ token: result.token });
};

const getAllUsers = async (req, res) => {
  const result = await Service.getAllUsers();

  return res.status(200).json(result);
};

const getUserById = async (req, res) => {
  const data = req.params;
  const result = await Service.getUserById(data);

  if (result.message) {
    return res.status(result.status).json({ message: result.message });
  }
  return res.status(200).json(result);
};

module.exports = {
  createUser,
  login,
  getAllUsers,
  getUserById,
};