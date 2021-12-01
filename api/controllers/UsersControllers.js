const usersServices = require('../services/usersServices');

const createUser = async (req, res) => {
  const newUser = req.body;

   const token = await usersServices.createUser(newUser);

  return res.status(201).json({ token });
};

const getAllUsers = async (req, res) => {
  const allUsers = await usersServices.getUsers();
  return res.status(200).json(allUsers);
};

module.exports = {
  createUser,
  getAllUsers,
};
