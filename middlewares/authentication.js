const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

module.exports = (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) throw new Error('MISSING_TOKEN');

  try {
    const payload = jwt.verify(token, jwtSecret);
    req.user = payload;
    return next();
  } catch (err) {
    throw new Error('INVALID_TOKEN');
  }
 };