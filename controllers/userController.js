const userService = require('../services/userService');

const registerUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  console.log('==> Passou pelo Controller <==');

  const response = await userService.registerUser(displayName, email, password, image);

  return res.status(201).json(response);
};

module.exports = { registerUser };