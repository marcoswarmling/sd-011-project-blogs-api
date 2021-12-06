const jwt = require('jsonwebtoken');

const secret = 'blogsApiProject';

const authToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const tokenVerified = jwt.verify(token, secret);

    req.currentUser = tokenVerified;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authToken;