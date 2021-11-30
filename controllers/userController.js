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
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await userService.getUserById(id);
    
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { user } = req;

    await userService.deleteUser(user);

    res.status(204).send();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  deleteUser,
};