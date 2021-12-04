const jwt = require('jsonwebtoken');

const secret = 'senha';

async function validateJWT(req, res, next) {
  const token = req.headers.authorization;
  console.log(token, 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const validate = jwt.verify(token, secret);
    req.user = validate;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
}

module.exports = validateJWT;
