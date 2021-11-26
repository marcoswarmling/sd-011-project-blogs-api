const userService = require('../services/userService');

const addUser = async (req, res, next) => {
  const token = await userService.addUser(req.body);
  if (token.err) return next(token.err);

  return res.status(201).json({ token });
};

module.exports = {
  addUser,
};
