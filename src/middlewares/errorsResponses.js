const errors = require('../schemas/errorCodes');

module.exports = (error, _req, res, _next) => {
  const { statusCode, message } = error;

  if (statusCode) return res.status(statusCode).json({ message });

  return res.status(errors.internalServerError).json({ message: error.message });
};