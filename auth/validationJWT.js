const jwt = require('jsonwebtoken');
const { findUserByEmail } = require('../services/Users');

const secret = require('../helpers/secretKey');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const userTokenExists = await findUserByEmail(decoded.data.email);
    if (!userTokenExists) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    const { id, email } = userTokenExists;

    req.userData = { id, email };

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
