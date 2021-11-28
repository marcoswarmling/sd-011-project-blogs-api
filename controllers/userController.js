const rescue = require('express-rescue');
const { User } = require('../models');

const createUser = rescue (async (req, res) => {
  const { displayName, email, password, image } = req.body;
  
  try {
  const user = await User.create({ displayName, email, password, image });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'erro ao criar novo usuário' });
  }
});

const getById = rescue(async (req, res) => {
  try {
  const user = await User.findByPk(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'erro ao pegar os usuários' });
  }
});

const getAllUsers = rescue(async (req, res) => {
  try {
  const user = await User.findAll();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'erro ao pegar os usuários' });
  }
});

module.exports = {
  createUser,
  getById,
  getAllUsers,
};