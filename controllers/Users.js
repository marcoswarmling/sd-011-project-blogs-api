const userService = require('../services/Users');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await userService.create({ displayName, email, password, image });
  const { message } = response;
  if (message) {
    return res.status(409).json(response);
  }
  return res.status(201).json(response);
};

module.exports = {
  create,
};
