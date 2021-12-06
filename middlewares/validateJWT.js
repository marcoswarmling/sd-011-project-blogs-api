const Jwt = require('jsonwebtoken');
const { User } = require('../models');
// const { HTTP_UNAUTHORIZED, HTTP_NOT_FOUND } = require('../../utils/utils');

const { JWT_SECRET } = process.env;

const validateUserWithToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found!' });

  try {
    const { user: { id } } = Jwt.verify(token, JWT_SECRET);

    const user = await User.findByPk(id);

    if (!user) {
      return res
        .status(404)
        .json({ message: 'Not found user.' });
    }
    req.user = user;

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateUserWithToken,
};
