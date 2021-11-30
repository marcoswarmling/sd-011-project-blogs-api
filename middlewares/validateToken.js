require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }

  try {
    const data = jwt.verify(token, jwtSecret);
    req.user = data;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'token malformed' });
  }
};
