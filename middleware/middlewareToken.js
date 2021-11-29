const { validAuth } = require('../auth');

function checkToken(req, res, next) {
  const { authorization } = req.headers;

  if (authorization === '') {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  next();
}

function checkValidToken(req, res, next) {
  const { authorization } = req.headers;

  try {
    const { id, email, displayName } = validAuth(authorization);
    req.userInfo = {
      id,
      email,
      displayName,
    };
  } catch (error) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
  next();
}

module.exports = {
  checkToken,
  checkValidToken,
};
