const { createdUser, getUser } = require('../service/userService');

const createNewUser = async (req, res) => {
  const user = await createdUser(req.body);
  res.status(201).json(user);
};

const getAllUsers = async (req, res) => {
  const users = await getUser();
  res.status(200).json(users);
};

module.exports = { createNewUser, getAllUsers };