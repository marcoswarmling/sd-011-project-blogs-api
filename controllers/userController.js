const service = require('../services/userService');

const createUser = async (req, res, _next) => {
  console.log('caiu no controller');
  const { displayName, email, password, image } = req.body;

  const result = await service.createUser({ displayName, email, password, image });

  res.status(201).json(result);
};

module.exports = {
  createUser,
};
