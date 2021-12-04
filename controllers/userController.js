const jwt = require('jsonwebtoken');
const userService = require('../services/userSevice');

const ERROR_MESSAGE = {
  message: 'Internal Server Error',
};

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const user = await userService
    .createUser(displayName, email, password, image);
    
    if (!user.displayName) {
      return res
        .status(409)
        .json(user);
    }

    const token = jwt.sign({ data: user }, JWT_SECRET, jwtConfig);

    res
      .status(201)
      .json({ token });
  } catch (error) {
    res
      .status(500)
      .json(ERROR_MESSAGE);
  } 
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService
    .login(email, password);
    
    if (!user.displayName) {
      return res
        .status(400)
        .json(user);
    }

    const token = jwt.sign({ data: user }, JWT_SECRET, jwtConfig);

    res
      .status(200)
      .json({ token });
  } catch (error) {
    res
      .status(500)
      .json(ERROR_MESSAGE);
  } 
};

const getAll = async (req, res) => {
  try {
    const users = await userService
    .getAll();
    
    res
      .status(200)
      .json(users);
  } catch (error) {
    res
      .status(500)
      .json(ERROR_MESSAGE);
  } 
};

module.exports = {
  createUser,
  login,
  getAll,
};
