const userService = require('../services/userService');

const addUser = async (req, res) => {
  const result = await userService.addUser(req.body);
  const { validationError } = result;

  if (!result) return res.status(404).send('deu ruim');
  if (validationError) res.status(400).json({ message: validationError.message });

  res.status(201).json({ token: result });
};

module.exports = {
  addUser,
};
