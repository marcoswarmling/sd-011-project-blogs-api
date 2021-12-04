const TOKEN_NOT_FOUND_ERROR = {
  message: 'Token not found',
};

const validateToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (token) {
    next();
    return true;
  } 
  
  return res
    .status(401)
    .json(TOKEN_NOT_FOUND_ERROR);
};

module.exports = {
  validateToken,
};