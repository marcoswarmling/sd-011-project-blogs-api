const jwt = require('jsonwebtoken');
const { Users } = require('../models');

require('dotenv').config();

const createUser = async (req, res) => {
  const { email, password, image, displayName } = req.body;

  try {
    const doesUserExists = await Users.findOne({ where: { email } });
    if (doesUserExists) {
      return res.status(409).json({ message: 'User already registered' });
    }

    await Users.create({ displayName, email, password, image });

    const token = jwt.sign({
      displayName,
      email,
    }, 'secret', { expiresIn: '8h' });

    return res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const isTokenValid = (auth) => {
    const validToken = jwt.verify(auth, 'secret', (error, decoded) => {
      if (error) return null;
      return decoded;
    });

    return validToken;
  };
const listUsers = async (req, res) => {
    const auth = req.headers.authorization;

    if (!auth) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const validToken = isTokenValid(auth);

    if (!validToken) return res.status(401).json({ message: 'Expired or invalid token' });

    try {
      const users = await Users.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json(err);
    }
  };
  const getUserById = async (req, res) => {
    const { id } = req.params;
    const auth = req.headers.authorization;

    if (!auth) return res.status(401).json({ message: 'Token not found' });

    const validToken = isTokenValid(auth);

    if (!validToken) return res.status(401).json({ message: 'Expired or invalid token' });

    try {
      const user = await Users.findByPk(id, { attributes: ['id', 'displayName', 'email', 'image'] });
      if (!user) return res.status(404).json({ message: 'User does not exist' });
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  };

module.exports = {
  createUser,
  listUsers,
  getUserById,
};