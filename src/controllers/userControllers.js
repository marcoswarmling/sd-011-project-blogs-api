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

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = authorization;
  const users = await userServices.getUsers(token);
  console.log(users);
  if (users.message) {
    return res.status(401).json({ message: users.message });
  }

  return res.status(200).json(users);
};

module.exports = {
  createUser,
  getUsers,
};
