const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

async function validateToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    return next();
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ message: 'jwt malformed' });
  }
}

module.exports = {
  validateToken,
};
