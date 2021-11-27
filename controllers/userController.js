const userService = require('../services/userService');

const createUser = async (req, res, next) => {
  try {
  const { body } = req;

  const token = await userService.createUser(body);

  return res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { body } = req;
  
    const token = await userService.loginUser(body);
  
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const getAllUsers = async (_req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
};