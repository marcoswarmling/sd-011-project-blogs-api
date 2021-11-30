const service = require('../services/userService');

const createUser = async (req, res, _next) => {
  const { displayName, email, password, image } = req.body;

  const result = await service.createUser({ displayName, email, password, image });

  res.status(201).json(result);
};

module.exports = {
  createUser,
};
