require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    try {
      const tokenDecoded = jwt.verify(token, secret);
      req.user = tokenDecoded;     
    return next();
    } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;