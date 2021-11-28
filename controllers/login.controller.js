const ApiError = require('../utils/ApiError');
const HttpCodes = require('../utils/HttpCodes');

async function logIn(req, res, next) {
  try {
    const { body } = req;

    if (!body) {
      return next(ApiError.internalServerError());
    }

    return res.status(HttpCodes.code.OK).send('Olá mundo no logIn!');
  } catch (err) {
    return next(ApiError.internalServerError());
  }
}

module.exports = {
  logIn,
};
