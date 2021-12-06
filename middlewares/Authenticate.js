const jwt = require('jsonwebtoken');
const { User } = require('../models');

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  const auth = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return false;
    return decoded;
  });

  if (!auth) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  const { data: { email, password } } = auth;

  const exists = await User.findOne({ where: { email, password } });

  if (!exists) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  req.user = exists;

  next();
};

module.exports = authenticate;
