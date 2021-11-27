const { validAuth } = require('../auth');

function checkName(req, res, next) {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  next();
}

function checkEmail(req, res, next) {
  const { email } = req.body;
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;

  if (!regex.test(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  next();
}

function checkPassword(req, res, next) {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be 6 characters long',
    });
  }
  next();
}

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
    validAuth(authorization);
  } catch (error) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
  next();
}

function cheNameCategories(req, res, next) {
  const { name } = req.body;

  if (!name || name === 'undefined') {
    return res.status(400).json({
      message: '"name" is required',
    });
  }

  next();
}

module.exports = {
  checkName,
  checkEmail,
  checkPassword,
  checkToken,
  checkValidToken,
  cheNameCategories,
};
