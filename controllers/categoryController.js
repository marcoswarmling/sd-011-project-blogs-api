const jwt = require('jsonwebtoken');
const { Categories } = require('../models');

const validateToken = (authHeader) => {
  const validToken = jwt.verify(authHeader, process.env.JWT_SECRET, (error, decoded) => {
    if (error) return null;

    return decoded;
  });

  return validToken;
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const validToken = validateToken(authHeader);
  if (!validToken) return res.status(401).json({ message: 'Expired or invalid token' });

  try {
    const isDuplicatedUser = await Categories.findOne({ where: { name } });
    if (isDuplicatedUser) {
      return res.status(409).json({ message: 'Category already registered' });
    }

    const createdCategory = await Categories.create({ name });

    return res.status(201).json(createdCategory);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  createCategory,
};