const { createdUser } = require('../service/userService');

const createNewUser = async (req, res) => {
  const user = await createdUser(req.body);
  res.status(201).json(user);
};

module.exports = { createNewUser };