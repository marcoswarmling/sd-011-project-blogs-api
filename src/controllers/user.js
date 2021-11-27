const servicesUser = require('../services/user');

const createUser = async (req, res) => {
  try {
    const token = await servicesUser.createUser(req.body);
    return res.status(201).json(token);
  } catch (error) {
    return res.status(500).json({ message: 'Um problema inesperado ocorreu' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await servicesUser.loginUser(email, password);
    return res.status(200).json(token);
  } catch (error) {
    return res.status(500).json({ message: 'Um problema inesperado ocorreu' });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const users = await servicesUser.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Um problema inesperado ocorreu' });
  }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await servicesUser.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
};

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
};
