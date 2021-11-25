const jwt = require('jsonwebtoken');
require('dotenv').config();

const token = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    jwt.verify(authorization, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ message: 'Expired or invalid token' });
      req.userId = decoded.id;
      return next();
    });
  } catch (error) {
    // console.log(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  token,
};
