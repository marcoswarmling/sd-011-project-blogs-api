const serviceUser = require('../services/userService');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await serviceUser.create({ displayName, email, password, image });
  if (response.message) {
    return res.status(409).json(response);
  }
  return res.status(201).json(response);
};

module.exports = {
  create,
};