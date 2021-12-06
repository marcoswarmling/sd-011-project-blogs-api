const errors = require('../../schemas/errors');
const { validateToken } = require('../../helpers/jwt');

module.exports = (req, _res, next) => {
  const { authorization: token } = req.headers;

  if (!token) return next(errors.auth.notFound);

  try {
    const data = validateToken(token);

    req.user = data;

    return next();
  } catch (error) {
    return next(errors.auth.invalidJWT);
  }
};