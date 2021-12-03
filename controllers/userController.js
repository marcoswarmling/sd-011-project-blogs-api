const JWT = require('jsonwebtoken');
const { User } = require('../models');

const USER_SECRET = 'secretUserSecret';

const createNewUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  await User.create({ displayName, email, password, image });

  const payload = { email, displayName };

  const token = JWT.sign(payload, USER_SECRET);

  return res.status(201).json({ token });
};

const getAllUser = async (req, res) => {
  const user = await User.findAll();
  console.log(user);

  if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  return res.status(200).json(user);
};

const getUserById = async (req, res) => {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) return res.status(404).json({ message: 'User does not exist' });

    return res.status(200).json(user);
};

module.exports = {
  createNewUser,
  getAllUser,
  getUserById,
};