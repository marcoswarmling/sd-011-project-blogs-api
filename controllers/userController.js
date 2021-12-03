const service = require('../services/userServices');
require('dotenv').config();

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const findUser = await service.getUserByEmail(email);

  if (findUser) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const newUser = await service.createUser({ displayName, email, password, image });

  return res.status(201).json({ token: newUser });
};

const login = async (req, res) => {
  const { email } = req.body;

  const findEmail = await service.login(email);

  if (!findEmail) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  
  return res.status(200).json({ token: findEmail });
};

const getAll = async (_req, res) => {
  const users = await service.getAll();

  return res.status(200).json(users);
};

const getId = async (req, res) => {
  const { id } = req.params;

  const userId = await service.getId(id);

  if (!userId) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  console.log(userId);

  return res.status(200).json(userId);
};

module.exports = {
  createUser,
  login,
  getAll,
  getId,
};
