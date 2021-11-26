const jwt = require('jsonwebtoken');
require('dotenv').config();

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const { userId } = payload.data;
    req.user = { userId };
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateJWT;