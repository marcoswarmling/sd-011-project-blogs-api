const { AuthorizationError } = require('../errors');
const { verify } = require('../services/token');

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return next(new AuthorizationError('Token not found'));

  try {
    const { userId } = verify(token);
    res.locals.userId = userId;
    next();
  } catch (err) {
    next(new AuthorizationError('Expired or invalid token'));
  }
};

module.exports = validateToken;
