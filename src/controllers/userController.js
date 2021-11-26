const userService = require('../services/userService');

const addUser = async (req, res) => {
  const token = await userService.addUser(req.body);

  if (!token) return res.status(404).send('deu ruim');

  res.status(201).json({ token });
};

module.exports = {
  addUser,
};
