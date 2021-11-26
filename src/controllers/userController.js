const userService = require('../services/userService');

const addUser = async (req, res) => {
  const result = await userService.addUser(req.body);
  const { message } = result;

  if (!result) return res.status(404).send('deu ruim');
  if (message) res.status(400).json({ message });

  res.status(201).json({ token: result });
};

module.exports = {
  addUser,
};
