const ApiError = require('../utils/ApiError');

function apiErrorHandler(err, _req, res, _next) {
  if (err instanceof ApiError) {
    res.status(err.code).json(err.message);
  }

  console.log(err.message);
  return res.status(500).json('DEFAULT SERVER ERROR');
}

module.exports = apiErrorHandler;