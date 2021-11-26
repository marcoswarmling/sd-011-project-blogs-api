const jwt = require('jsonwebtoken');

const secret = 'meusecret123';

const validToken = async (req, res, next) => {
  const token = req.header('authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
      }
      req.userId = decoded.id;
      next();
    });
  } catch (err) {
      return res.status(401).json({ message: err.message });
  } 
};

module.exports = { validToken };