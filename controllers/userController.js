const jwt = require('jsonwebtoken');
const UserService = require('../services/userServices');

const secret = 'minhasenhasupersecreta';

const getAll = async (_req, res) => {
  const getAllResponse = await UserService.getAll();
  if (getAllResponse.type === 'error') {
    return res.status(getAllResponse.code).json({ message: getAllResponse.message });
  }
  return res.status(200).json(getAllResponse.payload);
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
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ id: loginResponse.payload.id, email }, secret, jwtConfig);
  console.log(token);
  return res.status(200).json({ token });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const getByIdResponse = await UserService.getById(id);
  if (getByIdResponse.type === 'error') {
    res.status(getByIdResponse.code).json({ message: getByIdResponse.message });
  }
  return res.status(200).json(getByIdResponse.payload);
};

module.exports = {
  getAll,
  createUser,
  login,
  getById,
};
