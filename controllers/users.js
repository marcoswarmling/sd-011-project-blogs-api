const { User } = require('../models');

const getAllUsers = async (_req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
};

module.exports = {
  getAllUsers,
};
