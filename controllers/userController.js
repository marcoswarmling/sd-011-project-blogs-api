// const { Op } = require('sequelize');
const { User } = require('../models');
// const userService = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const data = await User.create({ displayName, email, password, image });

    return res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Aconteceu um erro ao fazer o cadastro' });
  }
};

module.exports = {
  createUser,
};
