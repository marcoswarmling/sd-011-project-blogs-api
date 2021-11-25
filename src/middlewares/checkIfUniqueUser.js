const UserService = require('../services/userService');

const checkUniqueUser = async (req, res, next) => {
  const { email } = req.body;
  const result = await UserService.findUserByEmail(email);
  if (result !== undefined) return res.status(409).json({ message: 'User already registered' });
  next();
};

module.exports = { checkUniqueUser };