const jwt = require('jsonwebtoken');
const userService = require('../../services/userSevice');

const TOKEN_NOT_FOUND_ERROR = {
  message: 'Token not found',
};

const TOKEN_INVALID_ERROR = {
  message: 'Expired or invalid token',
};

const { JWT_SECRET } = process.env;

const validateTokenExistence = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (token) {
    next();
    return true;
  } 
  
  return res
    .status(401)
    .json(TOKEN_NOT_FOUND_ERROR);
};

const validateToken = async (req, res, next) => {
  const { authorization: token } = req.headers;

  try {
    const { data: { email } } = jwt.verify(token, JWT_SECRET);
    const user = await userService.emailExists(email);

    req.user = user;

    next();
  } catch (error) {
    return res
      .status(401)
      .json(TOKEN_INVALID_ERROR);
  }
};

module.exports = {
  validateTokenExistence,
  validateToken,
};