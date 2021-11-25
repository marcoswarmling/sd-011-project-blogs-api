const { status, intServerError } = require('../Helpers/status&messages');

function errorMiddleware(error, _req, res, _next) {
  if (error.status && error.message) {
    return res.status(error.status).json({ message: error.message });
  }
  return res.status(status.intServerError).json({ message: intServerError.unknown });
}

module.exports = { errorMiddleware };
