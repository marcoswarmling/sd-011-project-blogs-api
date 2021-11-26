const userService = require('../services/userService');

const addUser = async (req, res) => {
  const result = await userService.addUser(req.body);
  if (!result) return res.status(409).json({ message: 'User already registered' });
  
  const { message } = result;
  if (message) return res.status(400).json({ message });

  return res.status(201).json({ token: result });
};

module.exports = {
  addUser,
};
