const userService = require('../services/userService');

const register = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await userService.userRegister(displayName, email, password, image);
    if (newUser.message) {
      return res.status(409).json(newUser);
    }
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Something is wrong' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginUser = await userService.loginRegister(email, password);
    if (loginUser.message) {
      return res.status(400).json(loginUser);
    }
    return res.status(200).json(loginUser);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Something is wrong' });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const allUsers = await userService.getAllUsers();
    return res.status(200).json(allUsers);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Something is wrong' });
  }
};

module.exports = {
  register,
  login,
  getAllUsers,
};