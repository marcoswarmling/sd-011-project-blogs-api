const { userService } = require('../services');

const newUser = async (req, res) => {
  const token = await userService.newUser(req.body);
  return res.status(201).json({ token });
};

module.exports = {
  newUser,
};