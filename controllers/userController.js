const UserService = require('../services/userServices');

// const secret = 'minhasenhasupersecreta';

const getAll = async (_req, res) => {
  const getAllResponse = await UserService.getAll();
  return res.status(200).json(getAllResponse);
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const createResponse = await UserService.createUser(displayName, email, password, image);
  if (createResponse.type === 'error') {
    return res.status(createResponse.code).json({ message: createResponse.message });
  }
  return res.status(201).json({ token: 'testandootoken' });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const loginResponse = await UserService.login(email, password);
  if (loginResponse.type === 'error') {
    return res.status(loginResponse.code).json({ message: loginResponse.message });
  }
  return res.status(200).json({ token: 'tokenserageradoaqui' });
};

module.exports = {
  getAll,
  createUser,
  login,
};
