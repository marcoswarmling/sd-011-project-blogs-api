const UserController = require('../services/userServices');

const getAll = async (_req, res) => {
  const getAllResponse = await UserController.getAll();
  return res.status(200).json(getAllResponse);
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const createResponse = await UserController.createUser(displayName, email, password, image);
  if (createResponse.type === 'error') {
    return res.status(createResponse.err.code).json(createResponse.err.message);
  }
  return res.status(201).json({ token: 'testandootoken' });
};

module.exports = {
  getAll,
  createUser,
};
