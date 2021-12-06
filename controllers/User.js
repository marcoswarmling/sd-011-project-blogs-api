require('dotenv').config();
const jwt = require('jsonwebtoken');
const userService = require('../services/User');
const { Users } = require('../models');

const { JWT_SECRET } = process.env;

const createNewUser = async (req, res) => {
  try {
  const { displayName, email, password, image } = req.body;
  const user = { displayName, email, password, image };

  const newUser = await userService.createNewUser(user);  
  if (newUser.message) {
    return res.status(409).json({ message: newUser.message });
  }

  await Users.create(user);
  
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };    
  const token = jwt.sign({ data: user }, JWT_SECRET, jwtConfig);  

  return res.status(201).json({ token });  
} catch (e) {
  console.log(e);
  return res.status(500).json({ message: 'algo deu errado!' });
}
};

const loginUser = async (req, res) => {
  try {
  const { email, password } = req.body;
  const user = { email, password };

  const doesUserExists = await userService.loginUser(user);
  console.log(doesUserExists);  
  
  if (doesUserExists.message) {
    return res.status(400).json({ message: doesUserExists.message });
  }  

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };    
  const token = jwt.sign({ data: user }, JWT_SECRET, jwtConfig);
  return res.status(200).json({ token });
} catch (e) {
  console.log(e);
  return res.status(500).json({ message: 'algo deu errado!' });
}
};

const getAllUsers = async (req, res) => {
  try {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
} catch (e) {
  console.log(e);
  return res.status(500).json({ message: 'algo deu errado!' });
}
};

const getUserById = async (req, res) => {
  try {
  const { id } = req.params;
  const user = await userService.getUserById(id);  
  
  if (user.message) {
    return res.status(404).json({ message: user.message });
  }   
  
  return res.status(200).json(user);
 } catch (e) {
  console.log(e);
  return res.status(500).json({ message: 'algo deu errado!' });
}
};

module.exports = {
  createNewUser,
  loginUser,
  getAllUsers,
  getUserById,
};