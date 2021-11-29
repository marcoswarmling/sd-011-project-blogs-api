const { HttpError } = require('../errors');

const errorCodeDict = {
  authorization: 401,
  conflict: 409,
  forbidden: 403,
  internal: 500,
  notFound: 404,
  invalidData: 400,
};

const handleError = (err, _req, res, _next) => {
  if (err instanceof HttpError) {
    return res.status(err.status).json({ message: err.message });
  }

  if (!err.code) {
    console.error(err);
    return res.status(500).json({
        error: { message: 'An unexpected error ocurred.', code: 'unexpected_error' },
    });
  }

  const errorHttpCode = errorCodeDict[err.code];

  if (errorHttpCode > 500) {
    console.log(err);
  }

  res.status(errorHttpCode || 500).json({ message: err.message });
};

module.exports = handleError;
