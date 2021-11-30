const errors = require('../../../schemas/errorMessage');
const JWT = require('../../../helppers/jwt');

const tokenValidation = (req, res, next) => {
  const jwt = req.headers.authorization;

  if (!jwt) {
    const { statusCode, message } = errors.token.notExistent;

    res.status(statusCode).json(message);
  }

  if (JWT.validateToken(jwt)) {
    next();
  }

  const { statusCode, message } = errors.token.expired;
  
  res.status(statusCode).json(message);
};

module.exports = {
  tokenValidation,
};
