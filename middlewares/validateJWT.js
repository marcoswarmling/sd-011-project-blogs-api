const jwt = require('jsonwebtoken');
require('dotenv').config();
const { getUserByName } = require('../services/users');

const secret = process.env.JWT_SECRET;

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    console.log(decoded.data);
    const user = await getUserByName(decoded.data);

    if (user) {
      req.user = user.dataValues.id;
      return next();
    }

    return res.status(401).json({ message: 'User not found' });
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateJWT,
};
