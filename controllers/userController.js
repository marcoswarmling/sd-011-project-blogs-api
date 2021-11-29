const userService = require('../services/userService');

const createNewUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const newUser = await userService.createNewUser({ displayName, email, password, image });
  return res.status(201).json({ token: newUser });
};

module.exports = {
  createNewUser,
};