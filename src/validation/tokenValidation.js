require('dotenv').config();

const jwt = require('jsonwebtoken');

const verification = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });

  const tokenSecret = process.env.JWT_SECRET;
  
  jwt.verify(token, tokenSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.userId = decoded;
    next();
  });
};

module.exports = verification;