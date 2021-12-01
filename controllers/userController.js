const service = require('../services/userService');

const createUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  const result = await service.createUser({ displayName, email, password, image });

  return result.code
    ? next(result)
    : res.status(201).json(result);
};

module.exports = {
  createUser,
};
