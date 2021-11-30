const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  console.log(req.query, 'QUERYPARAM DENTRO DO JWT');

  try {
    const payload = jwt.verify(token, secret);
    req.userInfo = payload;
    req.searchTerm = req.query;
    next();
  } catch (e) {
    console.error(e);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateJWT,
};
