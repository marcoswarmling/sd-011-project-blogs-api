const jwt = require('jsonwebtoken');
const { Users } = require('../models');

require('dotenv').config();

const tokenConfig = { expiresIn: '1h' };

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  try {
    const isDuplicatedUser = await Users.findOne({ where: { email } });
    if (isDuplicatedUser) {
      return res.status(409).json({ message: 'User already registered' });
    }

    const token = jwt.sign({
      displayName,
      email,
    }, process.env.JWT_SECRET, tokenConfig);

    await Users.create({ displayName, email, password, image });

    return res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ where: { email, password } });
    
    if (!user) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = jwt.sign({
      displayName: user.displayName,
      email: user.email,
    }, process.env.JWT_SECRET, tokenConfig);

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getUsers = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const validToken = jwt.verify(authHeader, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    return decoded;
  });

  if (!validToken) return res.status(401).json({ message: 'Expired or invalid token' });

  try {
    const users = await Users.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  createUser,
  login,
  getUsers,
};
