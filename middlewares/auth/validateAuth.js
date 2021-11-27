require('dotenv').config();
const jwt = require('jsonwebtoken');

const isValidateToken = (req, res, next) => {
const token = req.headers.authorization;
  if (!token) {
  return res.status(401).json({ message: 'Token not found' }); 
  }
  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' }); 
  }
};

module.exports = { isValidateToken };