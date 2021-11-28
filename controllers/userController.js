const jwt = require('jsonwebtoken');
const { Users } = require('../models');

require('dotenv').config();

// Requisito 1
const createUser = async (req, res) => {
  const { email, password, image, displayName } = req.body;

  try {
    const doesUserExist = await Users.findOne({ where: { email } });
    if (doesUserExist) {
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

// Requisito 3
const listUsers = async (req, res) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const validToken = jwt.verify(auth, 'secret', (err, decoded) => {
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
  listUsers,
};
