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

module.exports = {
  register,
};