const { createdUser, getUser, getUserId } = require('../service/userService');

const createNewUser = async (req, res) => {
  const user = await createdUser(req.body);
  res.status(201).json(user);
};

const getAllUsers = async (req, res) => {
  const users = await getUser();
  return res.status(200).json(users);
};
const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await getUserId(id);
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(user);
};

module.exports = { createNewUser, getAllUsers, getUserById };