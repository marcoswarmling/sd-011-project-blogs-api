const servicesUser = require('../services/servicesUser');

const createUser = async (req, res) => {
  const token = await servicesUser.createUser(req.body);
  return res.status(201).json(token);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const token = await servicesUser.loginUser(email, password);
  return res.status(200).json(token);
};

const allUsers = async (_req, res) => {
  const users = await servicesUser.allUsers();
  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await servicesUser.getById(id);
  if (user.message) {
    return res.status(404).json({ message: user.message });
  }
  return res.status(200).json(user);
};

module.exports = {
  createUser,
  loginUser,
  allUsers,
  getById,
};
