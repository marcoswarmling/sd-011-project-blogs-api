const UsersService = require('../services/usersService');

const createUser = async (req, res) => {
  const { email, password, displayName, image } = req.body;

  const user = await UsersService.create(displayName, email, password, image);

  if (user.message === 'User already registered') {
    return res.status(409).json(user);
  }

  if (user && !user.token) {
    return res.status(400).json(user);
  }

  return res.status(201).json(user);
};

const getAllUsers = async (req, res) => {
 const users = await UsersService.getAllUsers();
 
 return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await UsersService.getUserById(id);

  if (user && !user.token) {
    return res.status(401).json(user);
  }

  return res.status(200).json(user);
};

module.exports = { createUser, getAllUsers, getUserById };
