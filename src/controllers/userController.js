const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const userService = require('../services/userService');
const {
  STATUS_CODE_OK,
  STATUS_CODE_CREATED,
} = require('../helpers/index.js');

const JWT_SECRET = 'hardcoded-secret';
const jwtConfig = {
expiresIn: '7d',
algorithm: 'HS256',
};

const createUser = rescue(async (req, res) => {
  const { displayName, email, password, image } = req.body;
  
  const duplicateEmail = await userService.getUserByEmail(email);
  if (duplicateEmail) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  
  const token = jwt.sign({ email }, JWT_SECRET, jwtConfig);
  // console.log(token);

  await userService.createUser({ displayName, email, password, image });
  // console.log(user);
  return res.status(STATUS_CODE_CREATED).json({ token });
});

// const getUserByEmail = rescue(async (req, res) => {
//   const { email } = req.body;
//   const userFound = await userService.getUserByEmail(email);
//   console.log(userFound);
  
//   return res.status(STATUS_CODE_OK).json({ userFound });
// });

// const getById = rescue(async (req, res) => {
//   try {
//   const user = await User.findByPk(req.params.id);
//     res.status(STATUS_CODE_OK).json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'erro ao pegar os usuários' });
//   }
// });

const getAllUsers = rescue(async (req, res) => {
  // const { dataValues } = req.user;
  // console.log(dataValues);
  
  const allUsers = await userService.getAllUsers();
    res.status(STATUS_CODE_OK).json(allUsers);
});

module.exports = {
  createUser,
  // getUserByEmail,
  // getById,
  getAllUsers,
};