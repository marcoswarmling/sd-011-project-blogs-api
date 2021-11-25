const userService = require('../services/userService');

const register = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await userService.userRegister(displayName, email, password, image);
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Something is wrong' });
  }
};

module.exports = {
  register,
};