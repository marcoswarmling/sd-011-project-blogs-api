const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const userService = require('../services/userService');
const {
  // STATUS_CODE_OK,
  STATUS_CODE_CREATED,
} = require('../helpers/user.js');

const secret = 'hardcoded-secret';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createUser = rescue(async (req, res) => {
  const { displayName, email, password, image } = req.body;
  
  const user = await userService.createUser({ displayName, email, password, image });

  if (user.err) {
    res.status().json({ message: user.err.message });
  }

  return res.status(STATUS_CODE_CREATED).json(user);
});

// const getById = rescue(async (req, res) => {
//   try {
//   const user = await User.findByPk(req.params.id);
//     res.status(STATUS_CODE_OK).json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'erro ao pegar os usuários' });
//   }
// });

// const getAllUsers = rescue(async (req, res) => {
//   try {
//   const user = await User.findAll();
//     res.status(STATUS_CODE_OK).json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'erro ao pegar os usuários' });
//   }
// });

module.exports = {
  createUser,
  // getById,
  // getAllUsers,
};