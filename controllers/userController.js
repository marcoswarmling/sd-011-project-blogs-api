const rescue = require('express-rescue');
const { createUser, getAllUser, getUserById } = require('../services/userService');
const { User } = require('../models');

const createUsers = rescue(async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const userEmail = await User.findOne({ where: { email } }); 
  if (userEmail) return res.status(409).json({ message: 'User already registered' });
  const newUsers = await createUser({ displayName, email, password, image });
  return res.status(201).json({ token: newUsers });
});

const getAllUsers = rescue(async (_req, res) => {
  const users = await getAllUser();
  return res.status(200).json(users);
});

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
});

module.exports = { createUsers, getAllUsers, getById };