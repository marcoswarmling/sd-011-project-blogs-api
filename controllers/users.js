const { User } = require('../models');
const { getUserById } = require('../services/users');

const getAllUsers = async (_req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);

  if (user) {
    return res.status(200).json(user);
  }

  return res.status(404).json({ message: 'User does not exist' });
};

module.exports = {
  getAllUsers,
  getUser,
};
