const userServices = require('../services/userService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  
  const newUser = await userServices.createUser(displayName, email, password, image);
  if (!newUser.message) {
    return res.status(201).json(newUser);
  } 
  
  return res.status(409).json({ message: newUser.message });
};

const getUsers = async (req, res) => {
  const { authorization } = req.headers;
  const token = authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const users = await userServices.getUsers(token);
  if (users.message) {
    return res.status(401).json({ message: users.message });
  }

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const token = authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const user = await userServices.getUserById(id, token);
  
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  if (user.message) {
    return res.status(401).json({ message: user.message });
  }

  return res.status(200).json(user);
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
